import { Injectable } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';
import { BehaviorSubject } from 'rxjs';
import { map, distinctUntilChanged } from 'rxjs/operators';

export interface LayoutState {
  isMobile: boolean;
  isDesktop: boolean;
  showDrawer: boolean;
}

// tslint:disable-next-line: variable-name
let _state: LayoutState = {
  isMobile: false,
  isDesktop: true,
  showDrawer: false
};

@Injectable({
  providedIn: 'root'
})
export class LayoutService {
  private store = new BehaviorSubject<LayoutState>(_state);
  private state$ = this.store.asObservable();

  isMobile$ = this.state$.pipe(
    map(state => state.isMobile),
    distinctUntilChanged()
  );
  isDesktop$ = this.state$.pipe(
    map(state => state.isDesktop),
    distinctUntilChanged()
  );
  showDrawer$ = this.state$.pipe(map(state => state.showDrawer));

  constructor(private deviceDetectionService: DeviceDetectorService) {
    this.updateState({
      isMobile: this.deviceDetectionService.isMobile(),
      isDesktop: this.deviceDetectionService.isDesktop(),
      showDrawer: false
    });
  }

  public getStateSnapshot(): LayoutState {
    return { ..._state };
  }

  public setDrawerShown(value: boolean) {
    this.updateState({ ..._state, showDrawer: value });
  }

  private updateState(state: LayoutState) {
    this.store.next((_state = state));
  }
}
