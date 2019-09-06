import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrendingRoutingModule } from './trending-routing.module';
import { TrendingListComponent } from './components/trending-list/trending-list.component';


@NgModule({
  declarations: [TrendingListComponent],
  imports: [
    CommonModule,
    TrendingRoutingModule
  ]
})
export class TrendingModule { }
