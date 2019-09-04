import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HelplineEditRoutingModule } from './helpline-edit-routing.module';
import { HelplineEditComponent } from './helpline-edit.component';


@NgModule({
  declarations: [HelplineEditComponent],
  imports: [
    CommonModule,
    HelplineEditRoutingModule
  ]
})
export class HelplineEditModule { }
