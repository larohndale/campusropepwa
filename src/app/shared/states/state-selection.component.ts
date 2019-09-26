import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IStates } from 'src/app/core/models/states';

@Component({
  selector: 'app-state-selection',
  templateUrl: './state-selection.component.html',
  styleUrls: ['./state-selection.component.scss']
})
export class StateSelectionComponent implements OnInit {

  @Input()states: IStates[];
  @Input()selectedState: string;
  // tslint:disable-next-line: no-output-on-prefix
  @Output()onStateSelect: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  selectOption() {
    this.onStateSelect.emit(this.selectedState);
  }

}
