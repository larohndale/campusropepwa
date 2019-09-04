import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminTaskViewRoutingModule } from './admin-task-view-routing.module';
import { AdminTaskViewComponent } from './admin-task-view.component';


@NgModule({
  declarations: [AdminTaskViewComponent],
  imports: [
    CommonModule,
    AdminTaskViewRoutingModule
  ]
})
export class AdminTaskViewModule { }
