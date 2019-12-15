import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminTrendingRoutingModule } from './admin-trending-routing.module';
import { AdminTrendingComponent } from './admin-trending.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AdminTrendingStatesDialoug } from './admin-trending-states-dialoug/admin-trending-states-dialoug.component';
import { AdminTrendingClientsDialogue } from './admin-trending-clients-dialogue/admin-trending-clients-dialogue.component';

@NgModule({
  declarations: [AdminTrendingComponent, AdminTrendingStatesDialoug, AdminTrendingClientsDialogue],
  imports: [CommonModule, SharedModule, AdminTrendingRoutingModule],
  entryComponents: [
    AdminTrendingStatesDialoug,
    AdminTrendingClientsDialogue
  ],
})
export class AdminTrendingModule { }
