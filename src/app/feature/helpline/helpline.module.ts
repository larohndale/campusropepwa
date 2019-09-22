import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelplineRoutingModule } from './helpline.routing.module';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { UserHelplineModule } from './pages/user-helpline/user-helpline.module';



@NgModule({
  imports: [
    CommonModule,
    HelplineRoutingModule,
    UserHelplineModule
  ]
})
export class HelplineModule { }
