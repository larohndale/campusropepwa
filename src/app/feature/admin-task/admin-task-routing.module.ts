import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'view'
  },
  {
    path: 'view',
    loadChildren: () =>
      import('./pages/admin-task-view/admin-task-view.module').then(
        m => m.AdminTaskViewModule
      )
  },
  {
    path: 'edit/:id',
    loadChildren: () =>
      import('./pages/admin-task-edit/admin-task-edit.module').then(
        m => m.AdminTaskEditModule
      )
  },
  {
    path: 'assign',
    loadChildren: () =>
      import('./pages/admin-task-assign/admin-task-assign.module').then(
        m => m.AdminTaskAssignModule
      )
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminTaskRoutingModule {}
