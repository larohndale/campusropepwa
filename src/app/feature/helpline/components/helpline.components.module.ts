import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelplineListComponent } from './helpline-list/helpline-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HelplineFormComponent } from './helpline-form/helpline-form.component';

@NgModule({
  declarations: [HelplineListComponent, HelplineFormComponent],
  imports: [CommonModule, SharedModule],
  exports: [HelplineListComponent, HelplineFormComponent]
})
export class HelplineComponentsModule {}
