import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IState } from 'src/app/core/models/state';
import { ConstantsService } from 'src/app/core/core.module';

@Component({
  selector: 'app-helpline-add-edit',
  templateUrl: './helpline-add-edit.component.html',
  styleUrls: ['./helpline-add-edit.component.scss']
})
export class HelplineAddEditComponent implements OnInit {

  @Input() formGroup: FormGroup;
  @Input() titleAlert: string;

  states: IState[];
  selectedState = '';

  constructor(private constantsService: ConstantsService) { }

  ngOnInit() {
    this.states = this.constantsService.getStates();
  }

  onStateChange(selectedState: string) {
    this.formGroup.value.state = selectedState;
  }

}
