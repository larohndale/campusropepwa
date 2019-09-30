import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-helpline-add-edit',
  templateUrl: './helpline-add-edit.component.html',
  styleUrls: ['./helpline-add-edit.component.scss']
})
export class HelplineAddEditComponent implements OnInit {

  @Input() formGroup: FormGroup;
  @Input() titleAlert: string;
    // tslint:disable-next-line: no-output-on-prefix
  @Output() onHeadlineAddEvent: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onHeadlineAdd() {
    this.onHeadlineAddEvent.emit();
  }

}
