import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FeedsRoutingModule } from './feeds-routing.module';
import { FeedsComponent } from './feeds.component';
import { SharedModule } from 'src/app/shared/shared.module';
import {SafePipe} from './feeds.component';
@NgModule({
  declarations: [FeedsComponent, SafePipe],
  imports: [CommonModule, SharedModule, FlexLayoutModule, FeedsRoutingModule]
})
export class FeedsModule {}
