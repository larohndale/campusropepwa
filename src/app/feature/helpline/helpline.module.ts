import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelplineListComponent } from './components/helpline-list/helpline-list.component';
import { HelplineRoutingModule } from './helpline.routing.module';
import { MaterialModule } from 'src/app/shared/material/material.module';



@NgModule({
  declarations: [HelplineListComponent],
  imports: [
    CommonModule,
    MaterialModule,
    HelplineRoutingModule,
  ]
})
export class HelplineModule { }
