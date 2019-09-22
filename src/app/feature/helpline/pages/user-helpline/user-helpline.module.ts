import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserHelplineRoutingModule } from './user-helpline-routing.module';
import { UserHelplineComponent } from './user-helpline.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HelplineComponentsModule } from '../../components/helpline.components.module';

@NgModule({
  declarations: [UserHelplineComponent],
  imports: [
    CommonModule,
    SharedModule,
    UserHelplineRoutingModule,
    HelplineComponentsModule
  ]
})
export class UserHelplineModule {}
