import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelplineListComponent } from './helpline-list/helpline-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HelplineSearchComponent } from './helpline-search/helpline-search.component';
import { ClickToCallDialogComponent } from 'src/app/shared/click-to-call-dialog/click-to-call-dialog.component';

@NgModule({
  declarations: [HelplineListComponent, HelplineSearchComponent],
  imports: [CommonModule, SharedModule],
  entryComponents: [ ClickToCallDialogComponent ],
  exports: [HelplineListComponent, HelplineSearchComponent]
})
export class HelplineComponentsModule {}
