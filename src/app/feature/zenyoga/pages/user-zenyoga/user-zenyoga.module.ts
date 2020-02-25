import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserZenYogaRoutingModule } from './user-zenyoga-routing.module';
import { UserZenYogaComponent } from './user-zenyoga.component';
import { SharedModule } from '../../../../shared/shared.module';


@NgModule({
  declarations: [UserZenYogaComponent],
  imports: [
    CommonModule,
    UserZenYogaRoutingModule,
    SharedModule
  ]
})
export class UserZenYogaModule { }
