import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-state-selection',
  templateUrl: './state-selection.component.html',
  styleUrls: ['./state-selection.component.scss']
})
export class StateSelectionComponent implements OnInit {

  selectedState: string

  @Input()states: IStates[];
  @Output()onStateSelect: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  selectOption() {
    this.onStateSelect.emit(this.selectedState)
  }

}
