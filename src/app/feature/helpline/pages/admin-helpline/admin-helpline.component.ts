import { Component, OnInit } from '@angular/core';
import { HelplineService } from '../../services/helpline.service';
import { IState } from 'src/app/core/models/state';
@Component({
  selector: 'app-admin-helpline',
  templateUrl: './admin-helpline.component.html',
  styleUrls: ['./admin-helpline.component.scss']
})
export class AdminHelplineComponent implements OnInit {
  states: IState[];
  selectedState = 'National';
  helplines$ = this.helplineService.helplines$;

  constructor(
    private helplineService: HelplineService
    ) { }

  ngOnInit() {
    this.onStateChange(this.selectedState);
  }

  onStateChange(selectedState: string) {
    this.helplineService.findHelplinesByState(selectedState);
  }

}
