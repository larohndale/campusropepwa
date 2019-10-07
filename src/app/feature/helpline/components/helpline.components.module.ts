import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelplineListComponent } from './helpline-list/helpline-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HelplineSearchComponent } from './helpline-search/helpline-search.component';
import { ClickToCallComponent } from 'src/app/shared/click-to-call/click-to-call.component';

@NgModule({
  declarations: [HelplineListComponent, HelplineSearchComponent],
  imports: [CommonModule, SharedModule],
  entryComponents: [ ClickToCallComponent ],
  exports: [HelplineListComponent, HelplineSearchComponent]
})
export class HelplineComponentsModule {}
