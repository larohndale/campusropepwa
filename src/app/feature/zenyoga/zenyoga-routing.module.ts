import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { zenyogaRoutes } from './zenyoga.routes';

@NgModule({
  imports: [RouterModule.forChild(zenyogaRoutes)],
  exports: [RouterModule]
})
export class ZenYogaRoutingModule {}
