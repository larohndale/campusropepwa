import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopBarComponent } from './top-bar/top-bar.component';
import { LeftPaneComponent } from './left-pane/left-pane.component';
import { RightPaneComponent } from './right-pane/right-pane.component';



@NgModule({
  declarations: [TopBarComponent, LeftPaneComponent, RightPaneComponent],
  imports: [
    CommonModule
  ]
})
export class ShellModule { }
