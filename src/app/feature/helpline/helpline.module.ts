import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelplineRoutingModule } from './helpline.routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [CommonModule, HelplineRoutingModule, SharedModule]
})
export class HelplineModule {}
