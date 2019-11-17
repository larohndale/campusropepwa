import { Component, OnInit } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { fromEvent } from 'rxjs';
import { merge } from 'rxjs';
import { distinct, filter, map, debounceTime, tap, flatMap } from 'rxjs/operators';
import * as _ from 'lodash';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'campusrope-infinite-scroll',
  templateUrl: './campusrope-infinite-scroll.component.html',
  styleUrls: ['./campusrope-infinite-scroll.component.scss']
})
export class CampusRopeIScrollComponent {
  private _jsonURL = '.../../../assets/youtube.json';
  
  public getJSON(): Observable<any> {
    return this.http.get(this._jsonURL);
  }

getYoutubeData() {
  return new Promise((resolve) => {
    this.getJSON()
      .subscribe(data => {
      console.log("TCL: CampusRopeIScrollComponent -> getYoutubeData -> data", data)
        this._ytData = data;
        resolve()
      });
  })
}

_ytData: [];
private cache = [];
private pageByManual$ = new BehaviorSubject(1);
private itemHeight = 600;
private numberOfItems = 5;
private pageByScroll$ = fromEvent(window, "scroll")
  .pipe(
    map(() => window.scrollY),
    filter(current => current >= document.body.clientHeight - window.innerHeight),
    debounceTime(200),
    distinct(),
    map(y => Math.ceil((y + window.innerHeight) / (this.itemHeight * this.numberOfItems)))
  );

private pageByResize$ = fromEvent(window, "resize")
  .pipe(
    debounceTime(200),
    map(_ => Math.ceil(
      (window.innerHeight + document.body.scrollTop) /
      (this.itemHeight * this.numberOfItems)
    ))
  )

pageToLoad$: Observable<any>;
itemResults$: Observable<any>;
constructor(private http: HttpClient) {
  this.init()
}

async init() {
  await this.getYoutubeData()
  this.pageToLoad$ = merge(this.pageByManual$, this.pageByScroll$, this.pageByResize$)
    .pipe(
      distinct(),
      filter(page => this.cache[page - 1] === undefined)
    );

  this.itemResults$ = this.pageToLoad$
    .pipe(
      flatMap((page: number) => {
        return this.getYotubeData(page)
          .pipe(
            tap(resp => {
              this.cache[page - 1] = resp;
              console.log("TCL: AppComponent -> this.cache", this.cache)
              if ((this.itemHeight * this.numberOfItems * page) < window.innerHeight) {
                this.pageByManual$.next(page + 1);
              }
            })
          )
      }),
      map(() => _.flatMap(this.cache))
    );
}

getYotubeData(page): Observable<any> {
  return new Observable((observer) => {
    observer.next([... this._ytData.slice(5 * (page - 1), (this.numberOfItems * (page - 1)) + this.numberOfItems)])
    observer.complete()
  })
}

  

}

