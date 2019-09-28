import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IState } from 'src/app/core/models/state';

@Component({
  selector: 'app-state-selection',
  templateUrl: './state-selection.component.html',
  styleUrls: ['./state-selection.component.scss']
})
export class StateSelectionComponent implements OnInit {

  @Input()states: IState[];
  @Input()selectedState: string;
  // tslint:disable-next-line: no-output-on-prefix
  @Output()onStateChange: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  selectOption() {
    this.onStateChange.emit(this.selectedState);
  }

}
