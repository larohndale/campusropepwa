import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminHelplineComponent } from './admin-helpline.component';

const routes: Routes = [
  {
    path: '',
    component: AdminHelplineComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminHelplineRoutingModule {}
