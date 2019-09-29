import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { runInThisContext } from 'vm';

@Component({
  selector: 'app-state-selection-pane',
  templateUrl: './state-selection-pane.component.html',
  styleUrls: ['./state-selection-pane.component.scss']
})
export class StateSelectionPaneComponent implements OnInit {

  filterState: string;
  @Input()states: [];
  @Input()selectedState;
  // tslint:disable-next-line: no-output-on-prefix
  @Output()onStateSelect: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onStateClick(state) {
    this.onStateSelect.emit(state);
  }

}
