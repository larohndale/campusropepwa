import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { feedRoutes } from './feed.routes';

@NgModule({
  imports: [RouterModule.forChild(feedRoutes)],
  exports: [RouterModule]
})
export class TrendingRoutingModule {}
