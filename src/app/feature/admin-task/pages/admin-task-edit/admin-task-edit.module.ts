import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminTaskEditRoutingModule } from './admin-task-edit-routing.module';
import { AdminTaskEditComponent } from './admin-task-edit.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [AdminTaskEditComponent],
  imports: [CommonModule, SharedModule, AdminTaskEditRoutingModule]
})
export class AdminTaskEditModule {}
