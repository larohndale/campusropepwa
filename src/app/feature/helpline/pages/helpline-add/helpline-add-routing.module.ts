import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HelplineAddComponent } from './helpline-add.component';

const routes: Routes = [
  {
    path: '',
    component: HelplineAddComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HelplineAddRoutingModule {}
