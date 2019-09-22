import { Injectable } from '@angular/core';
import { IHelpline } from '../../../core/models/helpline';
import { tap, distinctUntilChanged, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

const HELPLINE_URL = `api/helplines`;
export interface HelpLineState {
  helplines: IHelpline[];
  inViewHelpline: IHelpline;
}

// tslint:disable-next-line: variable-name
let _state: HelpLineState = {
  helplines: [],
  inViewHelpline: null
};

@Injectable({
  providedIn: 'root'
})
export class HelplineService {
  private store = new BehaviorSubject<HelpLineState>(_state);
  private state$ = this.store.asObservable();

  helplines$ = this.state$.pipe(
    map(state => state.helplines),
    distinctUntilChanged()
  );

  inViewHelpline$ = this.state$.pipe(
    map(state => state.inViewHelpline),
    distinctUntilChanged()
  );

  constructor(private http: HttpClient) {}

  public getStateSnapshot(): HelpLineState {
    return { ..._state };
  }

  public findHelplines() {
    this.http
      .get(HELPLINE_URL)
      .pipe(
        tap((helplines: IHelpline[]) => {
          this.updateState({
            ..._state,
            helplines
          });
        })
      )
      .subscribe();
  }

  public findHelplineById(helplineId) {
    this.http
      .get(`${HELPLINE_URL}/${helplineId}`)
      .pipe(
        tap((inViewHelpline: IHelpline) => {
          this.updateState({
            ..._state,
            inViewHelpline
          });
        })
      )
      .subscribe();
  }

  deleteHelpline(helplineId) {
    this.http.delete(`${HELPLINE_URL}/${helplineId}`).subscribe((res: any) => {
      const helplines = _state.helplines
        .filter(helpline => helpline._id !== helplineId)
        .slice();
      this.updateState({
        ..._state,
        helplines
      });
    });
  }

  addHelpline(helplineData: IHelpline) {
    this.http.post(`api/helplines`, helplineData).subscribe((res: any) => {
      const helplines = [res, ..._state.helplines];
      this.updateState({
        ..._state,
        helplines
      });
    });
  }

  public clearInViewHelpline() {
    this.updateState({
      ..._state,
      inViewHelpline: null
    });
  }

  public updateHelpline(id: string, helpline) {
    return this.http.put(`${HELPLINE_URL}/${id}`, {
      ...helpline
    });
  }

  private updateState(state: HelpLineState) {
    this.store.next((_state = state));
  }
}
