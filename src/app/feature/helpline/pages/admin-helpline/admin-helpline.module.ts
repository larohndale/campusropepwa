import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminHelplineRoutingModule } from './admin-helpline-routing.module';
import { AdminHelplineComponent } from './admin-helpline.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HelplineComponentsModule } from '../../components/helpline.components.module';

@NgModule({
  declarations: [AdminHelplineComponent],
  imports: [
    CommonModule,
    SharedModule,
    AdminHelplineRoutingModule,
    HelplineComponentsModule
  ]
})
export class AdminHelplineModule {}
