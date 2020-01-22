import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeftPaneComponent } from './left-pane/left-pane.component';
import { RightPaneComponent } from './right-pane/right-pane.component';
import { SharedModule } from '../shared/shared.module';
import { ShellComponent } from './shell.component';
import { ShellRoutingModule } from './shell.routing.module';

@NgModule({
  declarations: [ LeftPaneComponent, RightPaneComponent, ShellComponent],
  imports: [CommonModule, SharedModule, ShellRoutingModule],
  exports: [ LeftPaneComponent, RightPaneComponent]
})
export class ShellModule {}
