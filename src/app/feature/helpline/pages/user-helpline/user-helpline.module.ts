import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserHelplineRoutingModule } from './user-helpline-routing.module';
import { UserHelplineComponent } from './user-helpline.component';
import { HelplineListComponent } from '../../components/helpline-list/helpline-list.component';


@NgModule({
  declarations: [
    HelplineListComponent,
    UserHelplineComponent
  ],
  imports: [
    CommonModule,
    UserHelplineRoutingModule
  ]
})
export class UserHelplineModule { }
