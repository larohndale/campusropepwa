import { Component, Input } from "@angular/core";
import { AuthService } from "src/app/core/services/auth.service";
import { routeAnimations } from "./core/core.module";
import { Router } from '@angular/router';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  animations: [routeAnimations]
})
export class AppComponent {
  title = "campusropepwa";
  constructor(private authService: AuthService,
    public router: Router
    ) {
      
    this.authService.setupLoggedUser();
  }

  onActivate(event) {
    window.scroll(0,0);
   
}
}
