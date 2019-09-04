import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelplineListComponent } from './components/helpline-list/helpline-list.component';



@NgModule({
  declarations: [HelplineListComponent],
  imports: [
    CommonModule
  ],
  entryComponents: [HelplineListComponent]
})
export class HelplineModule { }
