import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { trendingRoutes } from './trending.routes';

@NgModule({
  imports: [RouterModule.forChild(trendingRoutes)],
  exports: [RouterModule]
})
export class TrendingRoutingModule {}
