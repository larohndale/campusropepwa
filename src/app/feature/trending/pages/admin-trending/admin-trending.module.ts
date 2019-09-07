import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminTrendingRoutingModule } from './admin-trending-routing.module';
import { AdminTrendingComponent } from './admin-trending.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [AdminTrendingComponent],
  imports: [CommonModule, SharedModule, AdminTrendingRoutingModule]
})
export class AdminTrendingModule {}
