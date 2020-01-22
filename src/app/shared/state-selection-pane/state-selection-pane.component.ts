import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-state-selection-pane',
  templateUrl: './state-selection-pane.component.html',
  styleUrls: ['./state-selection-pane.component.scss']
})
export class StateSelectionPaneComponent implements OnInit {
  filterState: string;
  @Input() states: [];
  @Input() selectedState;
  @Output() stateSelected: EventEmitter<string> = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {}

  onStateClick(state) {
    this.stateSelected.emit(state);
  }
}
