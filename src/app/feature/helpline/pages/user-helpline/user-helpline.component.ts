import { Component, OnInit } from '@angular/core';
import { ROUTE_ANIMATIONS_ELEMENTS } from '../../../../core/animations/route.animations';

@Component({
  selector: 'app-user-helpline',
  templateUrl: './user-helpline.component.html',
  styleUrls: ['./user-helpline.component.scss']
})
export class UserHelplineComponent implements OnInit {
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;

  constructor() { }

  ngOnInit() {
  }
}
