import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminTrendingRoutingModule } from './admin-trending-routing.module';
import { AdminTrendingComponent } from './admin-trending.component';


@NgModule({
  declarations: [AdminTrendingComponent],
  imports: [
    CommonModule,
    AdminTrendingRoutingModule
  ]
})
export class AdminTrendingModule { }
