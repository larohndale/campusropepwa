import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserHelplineRoutingModule } from './user-helpline-routing.module';
import { UserHelplineComponent } from './user-helpline.component';


@NgModule({
  declarations: [UserHelplineComponent],
  imports: [
    CommonModule,
    UserHelplineRoutingModule
  ]
})
export class UserHelplineModule { }
