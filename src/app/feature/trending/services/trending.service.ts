import { Injectable } from '@angular/core';
import { ITrending } from '../../../core/models/trending';
import { tap, distinctUntilChanged, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';


const TRENDING_URL = `api/trendings`;
export interface TrendingState {
  trending: ITrending[];
  inViewTrending: ITrending;
}

let _state: TrendingState = {
  trending: [],
  inViewTrending: null
};

@Injectable({
  providedIn: 'root'
})
export class TrendingService {
  private store = new BehaviorSubject<TrendingState>(_state);
  private state$ = this.store.asObservable();
  
  trending$ = this.state$.pipe(
    map(state => state.trending),
    distinctUntilChanged()
  );

  inViewTrending$ = this.state$.pipe(
    map(state => state.inViewTrending),
    distinctUntilChanged()
  );
constructor(private http: HttpClient) { }
public getStateSnapshot(): TrendingState {
  return { ..._state };
}

public findTrendingsByState(stateName: string) {
  this.http
    .get(`${TRENDING_URL}?state=${stateName}`)
    .pipe(
      tap((trending: ITrending[]) => {
        this.updateState({
          ..._state,
          trending
        });

      })
    )
    .subscribe((res) => console.log(res,"resssss"));
}
private updateState(state: TrendingState) {
  console.log(state)
  this.store.next((_state = state));
}
}
