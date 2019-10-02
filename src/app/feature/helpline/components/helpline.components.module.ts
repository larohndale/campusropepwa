import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelplineListComponent } from './helpline-list/helpline-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HelplineSearchComponent } from './helpline-search/helpline-search.component';

@NgModule({
  declarations: [HelplineListComponent, HelplineSearchComponent],
  imports: [CommonModule, SharedModule],
  exports: [HelplineListComponent, HelplineSearchComponent]
})
export class HelplineComponentsModule {}
