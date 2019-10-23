import { Component, OnInit } from '@angular/core';
import { HelplineService } from '../../services/helpline.service';
import { IState } from 'src/app/core/models/state';
import { LayoutService } from 'src/app/core/services/layout.service';
@Component({
  selector: 'app-admin-helpline',
  templateUrl: './admin-helpline.component.html',
  styleUrls: ['./admin-helpline.component.scss']
})
export class AdminHelplineComponent implements OnInit {
  states: IState[];
  selectedState = 'National';
  helplines$ = this.helplineService.helplines$;
  isMobile$ = this.layoutService.isMobile$;

  constructor(
    private helplineService: HelplineService,
    private layoutService: LayoutService
    ) { }

  ngOnInit() {
    this.helplineService.findHelplines();
  }

  onStateChange(selectedState: string) {
    console.log(selectedState);
  }

}
