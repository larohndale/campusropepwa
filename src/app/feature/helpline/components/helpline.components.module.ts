import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelplineListComponent } from './helpline-list/helpline-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HelplineSearchComponent } from './helpline-search/helpline-search.component';
import { ClickToCallDialogComponent } from 'src/app/shared/click-to-call-dialog/click-to-call-dialog.component';
import { HelplineFormActionsComponent } from './helpline-form-actions/helpline-form-actions.component';
import { HelplineFormComponent } from './helpline-form/helpline-form.component';

@NgModule({
  declarations: [
    HelplineListComponent,
    HelplineSearchComponent,
    HelplineFormComponent,
    HelplineFormActionsComponent
  ],
  imports: [CommonModule, SharedModule],
  entryComponents: [ ClickToCallDialogComponent ],
  exports: [HelplineListComponent, HelplineSearchComponent, HelplineFormComponent]
})
export class HelplineComponentsModule {}
