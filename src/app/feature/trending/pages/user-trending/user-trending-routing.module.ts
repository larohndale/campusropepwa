import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserTrendingComponent } from './user-trending.component';

const routes: Routes = [
  {
    path: '',
    component: UserTrendingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserTrendingRoutingModule {}
