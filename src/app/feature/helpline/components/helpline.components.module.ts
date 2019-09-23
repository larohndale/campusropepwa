import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelplineListComponent } from './helpline-list/helpline-list.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [HelplineListComponent],
  imports: [CommonModule, SharedModule],
  exports: [HelplineListComponent]
})
export class HelplineComponentsModule {}
