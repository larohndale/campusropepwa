
import { NgModule } from '@angular/core';
import {  RouterModule } from '@angular/router';
import routes from './helpline.routes';

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HelplineRoutingModule { }
