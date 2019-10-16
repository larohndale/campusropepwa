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
  selectedState = "National";

  helplines$ = this.helplineService.helplines$;

  constructor(
    private helplineService: HelplineService,
    private constantsService: ConstantsService
  ) {}

  ngOnInit() {
    this.helplineService.findHelplines();
    this.states = this.constantsService.getStates();
  }

  onStateChange(selectedState: string) {
    console.log(selectedState);
  }
  onSelectedGroupChanged(value: object) {
    console.log(value, "testing");
  }
}
