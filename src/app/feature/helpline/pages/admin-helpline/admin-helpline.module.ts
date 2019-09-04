import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminHelplineRoutingModule } from './admin-helpline-routing.module';
import { AdminHelplineComponent } from './admin-helpline.component';


@NgModule({
  declarations: [AdminHelplineComponent],
  imports: [
    CommonModule,
    AdminHelplineRoutingModule
  ]
})
export class AdminHelplineModule { }
