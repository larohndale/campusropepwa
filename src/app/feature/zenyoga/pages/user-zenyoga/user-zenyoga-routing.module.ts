import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserZenYogaComponent } from './user-zenyoga.component';

const routes: Routes = [
  {
    path: '',
    component: UserZenYogaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserZenYogaRoutingModule {}
