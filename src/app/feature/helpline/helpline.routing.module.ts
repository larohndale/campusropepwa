import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { helplineRoutes } from './helpline.routes';

@NgModule({
  imports: [RouterModule.forChild(helplineRoutes)],
  exports: [RouterModule]
})
export class HelplineRoutingModule {}
