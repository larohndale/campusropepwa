import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelplineListComponent } from './components/helpline-list/helpline-list.component';
import { HelplineRoutingModule } from './helpline.routing.module';



@NgModule({
  declarations: [HelplineListComponent],
  imports: [
    CommonModule,
    HelplineRoutingModule
  ]
})
export class HelplineModule { }
