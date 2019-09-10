import { Component, OnInit } from '@angular/core';
import { of, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from '../core/services/auth.service';
import { LayoutService } from '../core/services/layout.service';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent implements OnInit {
  isMobile$: Observable<boolean>;
  showDrawer$: Observable<boolean>;
  loggedUser$: Observable<any>;
  routes: string[] = ['', '/helpline', '/trending'];
  currentRoutePosition: string;
  routeChangeCounter = 0;

  constructor(
    private router: Router,
    private authService: AuthService,
    private layoutService: LayoutService
  ) {}

  ngOnInit() {
    this.isMobile$ = this.layoutService.isMobile$;
    this.showDrawer$ = this.layoutService.showDrawer$;
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
}
