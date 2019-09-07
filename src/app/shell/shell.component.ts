import { Component, OnInit } from '@angular/core';
import { of, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from '../core/services/auth.service';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent implements OnInit {
  isMobile$: Observable<boolean>;
  showSidenav$: Observable<boolean>;
  loggedUser$: Observable<any>;
  routes: string[] = ['', '/helpline', '/trending-news'];
  currentRoutePosition: string;
  routeChangeCounter = 0;

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {
    this.isMobile$ = of(false);
    this.showSidenav$ = of(false);
    this.loggedUser$ = this.authService.loggedUser$;
  }

  get isDesktop$() {
    return of(true);
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

  openedChangeSidenav(value: boolean) {
    this.showSidenav$ = of(value);
  }
}
