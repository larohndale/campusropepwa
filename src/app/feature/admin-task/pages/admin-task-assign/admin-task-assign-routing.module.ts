import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminTaskAssignComponent } from './admin-task-assign.component';

const routes: Routes = [
  {
    path: '',
    component: AdminTaskAssignComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminTaskAssignRoutingModule {}
