import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserTrendingRoutingModule } from './user-trending-routing.module';
import { UserTrendingComponent } from './user-trending.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [UserTrendingComponent],
  imports: [
    CommonModule,
    UserTrendingRoutingModule,
    SharedModule
  ]
})
export class UserTrendingModule { }
