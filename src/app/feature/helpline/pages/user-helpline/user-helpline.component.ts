import { Component, OnInit } from "@angular/core";
import { ROUTE_ANIMATIONS_ELEMENTS } from "../../../../core/animations/route.animations";
import { HelplineService } from "../../services/helpline.service";
import { ConstantsService } from "src/app/core/core.module";
import { IState } from "src/app/core/models/state";

@Component({
  selector: "app-user-helpline",
  templateUrl: "./user-helpline.component.html",
  styleUrls: ["./user-helpline.component.scss"]
})
export class UserHelplineComponent implements OnInit {
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
  states: IState[];
  selectedState: IState;

  helplines$ = this.helplineService.helplines$;

  constructor(
    private helplineService: HelplineService,
    private constantsService: ConstantsService
  ) {
    this.selectedState = this.constantsService
      .getStates()
      .find(s => s.title === "National");
  }

  ngOnInit() {
    this.onStateChange(this.selectedState);
    this.states = this.constantsService.getStates();
  }

  onStateChange(selectedState: IState) {
    if (!selectedState) {
      selectedState = this.states.find(s => s.title === "National");

      return;
    }
    this.selectedState = selectedState;
    this.helplineService.findHelplinesByState(selectedState.title);
  }
  onSelectedGroupChanged(value: object) {
    console.log(value, "testing");
  }
}
