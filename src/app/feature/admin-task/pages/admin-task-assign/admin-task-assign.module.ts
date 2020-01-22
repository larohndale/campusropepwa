import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminTaskAssignRoutingModule } from './admin-task-assign-routing.module';
import { AdminTaskAssignComponent } from './admin-task-assign.component';


@NgModule({
  declarations: [AdminTaskAssignComponent],
  imports: [
    CommonModule,
    AdminTaskAssignRoutingModule
  ]
})
export class AdminTaskAssignModule { }
