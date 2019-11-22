import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeedsRoutingModule } from './feeds-routing.module';
import { FeedsComponent } from './feeds.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [FeedsComponent],
  imports: [CommonModule, SharedModule, FeedsRoutingModule]
})
export class FeedsModule {}
