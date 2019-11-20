import { Injectable } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  constructor(private location: Location, private router: Router) {}

  goBack() {
    this.location.back();
  }

  goToPath(path: string) {
    this.location.go(path);
  }

  navigate(path: string[]) {
    this.router.navigate(path);
  }

  getCurrentRouteUrl() {
   return this.router.url;
  }

}
