import { Injectable } from "@angular/core";
import { IUser } from "../../core/models/user";
import { tap, distinctUntilChanged, map } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Observable } from "rxjs";

const USER_URL = `api/users`;
export interface UserState {
  users: IUser[];
  inViewUsers: IUser;
}

// tslint:disable-next-line: variable-name
let _state: UserState = {
  users: [],
  inViewUsers: null
};

@Injectable({
  providedIn: "root"
})
export class UserService {
  private store = new BehaviorSubject<UserState>(_state);
  private state$ = this.store.asObservable();

  users$ = this.state$.pipe(
    map(state => state.users),
    distinctUntilChanged()
  );

  inViewUsers$ = this.state$.pipe(
    map(state => state.inViewUsers),
    distinctUntilChanged()
  );

  constructor(private http: HttpClient) {}

  public getStateSnapshot(): UserState {
    return { ..._state };
  }

  searchUser(term: string) {
    return this.http.get(`${USER_URL}?username_contains=${term}`);
  }

  public clearInViewUser() {
    this.updateState({
      ..._state,
      inViewUsers: null
    });
  }

  private updateState(state: UserState) {
    this.store.next((_state = state));
  }
}
