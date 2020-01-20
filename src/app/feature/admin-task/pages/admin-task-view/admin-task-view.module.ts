import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminTaskViewRoutingModule } from './admin-task-view-routing.module';
import { AdminTaskViewComponent } from './admin-task-view.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [AdminTaskViewComponent],
  imports: [CommonModule, SharedModule, AdminTaskViewRoutingModule]
})
export class AdminTaskViewModule {}
