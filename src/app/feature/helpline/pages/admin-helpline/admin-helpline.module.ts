import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminHelplineRoutingModule } from './admin-helpline-routing.module';
import { AdminHelplineComponent } from './admin-helpline.component';
import { HelplineListComponent } from '../../components/helpline-list/helpline-list.component';


@NgModule({
  declarations: [
    AdminHelplineComponent,
    HelplineListComponent
  ],
  imports: [
    CommonModule,
    AdminHelplineRoutingModule
  ]
})
export class AdminHelplineModule { }
