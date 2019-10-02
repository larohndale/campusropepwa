import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelplineListComponent } from './helpline-list/helpline-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HelplineAddEditComponent } from './helpline-add-edit/helpline-add-edit.component';
import { HelplineFormComponent } from './helpline-form/helpline-form.component';

@NgModule({
  declarations: [HelplineListComponent, HelplineAddEditComponent, HelplineFormComponent],
  imports: [CommonModule, SharedModule],
  exports: [HelplineListComponent, HelplineAddEditComponent]
})
export class HelplineComponentsModule {}
