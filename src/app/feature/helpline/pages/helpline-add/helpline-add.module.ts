import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HelplineAddRoutingModule } from './helpline-add-routing.module';
import { HelplineAddComponent } from './helpline-add.component';
import { HelplineComponentsModule } from '../../components/helpline.components.module';


@NgModule({
  declarations: [HelplineAddComponent],
  imports: [
    CommonModule,
    HelplineAddRoutingModule,
    HelplineComponentsModule
  ]
})
export class HelplineAddModule { }
