import { Component, OnInit } from '@angular/core';
import { ROUTE_ANIMATIONS_ELEMENTS } from '../../../../core/animations/route.animations';
import { HelplineService } from '../../services/helpline.service';
import { ConstantsService } from 'src/app/core/core.module';
import { IState } from 'src/app/core/models/state';
import { LayoutService } from 'src/app/core/services/layout.service';

@Component({
  selector: 'app-user-helpline',
  templateUrl: './user-helpline.component.html',
  styleUrls: ['./user-helpline.component.scss']
})
export class UserHelplineComponent implements OnInit {
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
  states: IState[];
  selectedState = 'National';

  helplines$ = this.helplineService.helplines$;
  isMobile$ = this.layoutService.isMobile$;

  constructor(
    private helplineService: HelplineService,
    private constantsService: ConstantsService,
    private layoutService: LayoutService
  ) {}

  ngOnInit() {
    this.helplineService.findHelplines();
    this.states = this.constantsService.getStates();
  }

  onStateChange(selectedState: string) {
    console.log(selectedState);
  }
  onSelectedGroupChanged(value: object) {
    console.log(value, 'testing');
  }
}
