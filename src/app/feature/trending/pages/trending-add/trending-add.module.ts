import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrendingAddRoutingModule } from './trending-add-routing.module';
import { TrendingAddComponent } from './trending-add.component';


@NgModule({
  declarations: [TrendingAddComponent],
  imports: [
    CommonModule,
    TrendingAddRoutingModule
  ]
})
export class TrendingAddModule { }
