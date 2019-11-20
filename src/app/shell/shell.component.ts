import { Component, OnInit } from '@angular/core';
import { of, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from '../core/services/auth.service';
import { LayoutService } from '../core/services/layout.service';
import { routeAnimations } from '../core/core.module';
import { LocationService } from '../core/services/location.service';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss'],
  animations: [routeAnimations]
})
export class ShellComponent implements OnInit {
  isMobile$: Observable<boolean>;
  isDesktop$: Observable<boolean>;
  showDrawer$: Observable<boolean>;
  loggedUser$: Observable<any>;
  routes: string[] = ['', '/helpline', '/trending'];
  currentRoutePosition: string;
  routeChangeCounter = 0;

  constructor(
    private router: Router,
    private authService: AuthService,
    private layoutService: LayoutService,
    private locationService: LocationService
  ) {}

  ngOnInit() {
    this.isMobile$ = this.layoutService.isMobile$;
    this.isDesktop$ = this.layoutService.isDesktop$;
    this.showDrawer$ = this.layoutService.showDrawer$;
    this.loggedUser$ = this.authService.loggedUser$;
  }
  navigateToDirection(direction: number) {
    this.routeChangeCounter = this.routeChangeCounter + direction;
    if (direction === -1 && this.routeChangeCounter < 0) {
      this.routeChangeCounter = this.routes.length - 1;
    }
    if (direction === 1 && !this.routes[this.routeChangeCounter]) {
      this.routeChangeCounter = 0;
    }
    this.currentRoutePosition = this.routes[this.routeChangeCounter];
    this.router.navigate([this.currentRoutePosition]);
  }

  isHelplineRoute() {
    switch (this.locationService.getCurrentRouteUrl()) {
      case '/helpline':
          return false;
      default:
          return true;
    }
  }

}
