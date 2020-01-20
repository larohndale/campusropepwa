import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserHelplineComponent } from './user-helpline.component';


const routes: Routes = [
  {
    path: '',
    component: UserHelplineComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserHelplineRoutingModule { }
