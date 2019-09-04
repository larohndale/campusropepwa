import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HelplineAddRoutingModule } from './helpline-add-routing.module';
import { HelplineAddComponent } from './helpline-add.component';


@NgModule({
  declarations: [HelplineAddComponent],
  imports: [
    CommonModule,
    HelplineAddRoutingModule
  ]
})
export class HelplineAddModule { }
