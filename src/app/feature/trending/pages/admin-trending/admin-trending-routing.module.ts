import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminTrendingComponent } from './admin-trending.component';

const routes: Routes = [
  {
    path: '',
    component: AdminTrendingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminTrendingRoutingModule {}
