import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserHelplineRoutingModule } from './user-helpline-routing.module';
import { UserHelplineComponent } from './user-helpline.component';
import { HelplineListComponent } from '../../components/helpline-list/helpline-list.component';
import { MaterialModule } from 'src/app/shared/material/material.module';


@NgModule({
  declarations: [
    UserHelplineComponent,
    HelplineListComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    UserHelplineRoutingModule
  ]
})
export class UserHelplineModule { }
