import { Injectable } from "@angular/core";
import { CanActivate } from "@angular/router";
import { Observable, of } from "rxjs";
import { AuthService } from "./auth.service";
import { LocationService } from "./location.service";

@Injectable({
  providedIn: "root"
})
export class AuthGuardService implements CanActivate {
  isAuthenticated: boolean;
  constructor(
    private authService: AuthService,
    private locationService: LocationService
  ) {
    this.authService.isAuthenticated$.subscribe(isAuth => {
      this.isAuthenticated = isAuth;
    });
  }

  canActivate(): boolean {
    if (this.isAuthenticated) {
      return true;
    } else {
      this.locationService.navigate(["/login"]);
      return false;
    }
  }
}
