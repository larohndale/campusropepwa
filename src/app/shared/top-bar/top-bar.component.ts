import { Component, OnInit } from '@angular/core';
import { LocationService } from '../../core/services/location.service';
import { Observable, of } from 'rxjs';
@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {
  isAuthenticated$: Observable<boolean>;
  constructor(private locationService: LocationService) {
    this.isAuthenticated$ = of(true);
  }

  ngOnInit() {}

  toggleSidenav() {}

  goBack() {
    this.locationService.goBack();
  }
}
