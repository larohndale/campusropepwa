import { Component, OnInit } from '@angular/core';
import { LocationService } from '../../core/services/location.service';
import { Observable, of } from 'rxjs';
import { LayoutService } from 'src/app/core/services/layout.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router,NavigationEnd } from '@angular/router';
import { Location } from "@angular/common";

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {
  isAuthenticated$: Observable<boolean>;
  routerUrl
  route
  hideElement = false;
  constructor(
    location: Location,
    private locationService: LocationService,
    private layoutService: LayoutService,
    private authService: AuthService,
    public router: Router
  ) {
    
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if (event.url === '/') {
          this.hideElement = true;
        }  else {
          this.hideElement = false;
        }
      }
    });

    console.log(this.route)
    
    this.isAuthenticated$ = this.authService.isAuthenticated$;
  }

  ngOnInit() {
   

  }

  toggleDrawer() {
    this.layoutService.toggleDrawer();
  }

  goBack() {
    this.locationService.goBack();
  }
}
