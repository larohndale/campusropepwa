import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminTaskEditComponent } from './admin-task-edit.component';

const routes: Routes = [
  {
    path: '',
    component: AdminTaskEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminTaskEditRoutingModule {}
