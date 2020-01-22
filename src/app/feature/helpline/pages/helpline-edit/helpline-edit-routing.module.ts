import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HelplineEditComponent } from './helpline-edit.component';

const routes: Routes = [
  {
    path: '',
    component: HelplineEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HelplineEditRoutingModule {}
