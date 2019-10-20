import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HelplineEditRoutingModule } from './helpline-edit-routing.module';
import { HelplineEditComponent } from './helpline-edit.component';
import { HelplineComponentsModule } from '../../components/helpline.components.module';


@NgModule({
  declarations: [HelplineEditComponent],
  imports: [
    CommonModule,
    HelplineEditRoutingModule,
    HelplineComponentsModule
  ]
})
export class HelplineEditModule { }
