import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminTrendingRoutingModule } from './admin-trending-routing.module';
import { AdminTrendingComponent } from './admin-trending.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AdminTrendingStatesDialoug } from './admin-trending-states-dialoug/admin-trending-states-dialoug.component';

@NgModule({
  declarations: [AdminTrendingComponent, AdminTrendingStatesDialoug],
  imports: [CommonModule, SharedModule, AdminTrendingRoutingModule],
  entryComponents: [
    AdminTrendingStatesDialoug,
  ],
})
export class AdminTrendingModule { }
