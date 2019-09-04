import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminTaskEditRoutingModule } from './admin-task-edit-routing.module';
import { AdminTaskEditComponent } from './admin-task-edit.component';


@NgModule({
  declarations: [AdminTaskEditComponent],
  imports: [
    CommonModule,
    AdminTaskEditRoutingModule
  ]
})
export class AdminTaskEditModule { }
