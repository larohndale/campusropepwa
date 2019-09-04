import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrendingEditRoutingModule } from './trending-edit-routing.module';
import { TrendingEditComponent } from './trending-edit.component';


@NgModule({
  declarations: [TrendingEditComponent],
  imports: [
    CommonModule,
    TrendingEditRoutingModule
  ]
})
export class TrendingEditModule { }
