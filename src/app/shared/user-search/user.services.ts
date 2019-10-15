import { Injectable } from '@angular/core';
import { IUser } from '../../core/models/user';
import { tap, distinctUntilChanged, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

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
  providedIn: 'root'
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

//   public findHelplineById(helplineId) {
//     this.http
//       .get(`${HELPLINE_URL}/${helplineId}`)
//       .pipe(
//         tap((inViewHelpline: IHelpline) => {
//           this.updateState({
//             ..._state,
//             inViewHelpline
//           });
//         })
//       )
//       .subscribe();
//   }

//   searchHelpline(term: string) {
//     return this.http.get(`${HELPLINE_URL}?name_contains=${term}`);
//   }

//   deleteHelpline(helplineId) {
//     this.http.delete(`${HELPLINE_URL}/${helplineId}`).subscribe((res: any) => {
//       const helplines = _state.helplines
//         .filter(helpline => helpline._id !== helplineId)
//         .slice();
//       this.updateState({
//         ..._state,
//         helplines
//       });
//     });
//   }

//   addHelpline(helplineData: IHelpline) {
//     this.http.post(`api/helplines`, helplineData).subscribe((res: any) => {
//       const helplines = [res, ..._state.helplines];
//       this.updateState({
//         ..._state,
//         helplines
//       });
//     });
//   }

  public clearInViewUser() {
    this.updateState({
      ..._state,
      inViewUsers: null
    });
  }

//   public updateHelpline(id: string, helpline) {
//     return this.http.put(`${HELPLINE_URL}/${id}`, {
//       ...helpline
//     });
//   }

  private updateState(state: UserState) {
    this.store.next((_state = state));
  }
}
