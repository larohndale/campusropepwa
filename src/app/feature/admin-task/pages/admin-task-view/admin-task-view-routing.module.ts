import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminTaskViewComponent } from './admin-task-view.component';

const routes: Routes = [
  {
    path: '',
    component: AdminTaskViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminTaskViewRoutingModule {}
