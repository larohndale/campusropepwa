import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserTrendingRoutingModule } from './user-trending-routing.module';
import { UserTrendingComponent } from './user-trending.component';


@NgModule({
  declarations: [UserTrendingComponent],
  imports: [
    CommonModule,
    UserTrendingRoutingModule
  ]
})
export class UserTrendingModule { }
