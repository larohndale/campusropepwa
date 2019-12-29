import { Component } from "@angular/core";
import { AuthService } from "src/app/core/services/auth.service";
import { routeAnimations } from "./core/core.module";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  animations: [routeAnimations]
})
export class AppComponent {
  title = "campusropepwa";
  constructor(private authService: AuthService) {
    this.authService.setupLoggedUser();
  }
}
