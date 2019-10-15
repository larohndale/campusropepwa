import { Component, OnInit } from '@angular/core';
import { IUser } from "../../core/models/user"
import { Subject, concat, of, Observable } from 'rxjs'
import { UserService } from "../user-search/user.services"
import {
  debounceTime,
  distinctUntilChanged,
  tap,
  switchMap,
  catchError
} from 'rxjs/operators';


@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.scss']
})
export class UserSearchComponent implements OnInit {
  userList$: Observable<any>;
  userLoading = false;
  userInput$ = new Subject<string>();
  selectedUser : IUser;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.setupUserSearch()
  }
  trackByFn(item: IUser){
    return item._id;
  }

  private setupUserSearch(){
    this.userList$ = concat(
      of([]),
      this.userInput$.pipe(
        debounceTime(200),
        distinctUntilChanged(),
        tap(() => (this.userLoading = true)),
        switchMap(term =>
          this.userService.searchUser(term).pipe(
            catchError(() => of([])), // empty list on error
            tap(() => (this.userLoading = false))
          )
        )
      )
    )
  }
}
