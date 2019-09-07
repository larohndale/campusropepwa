import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrendingEditComponent } from './trending-edit.component';

const routes: Routes = [
  {
    path: '',
    component: TrendingEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrendingEditRoutingModule {}
