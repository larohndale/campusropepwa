import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrawerComponent } from './drawer/drawer.component';
import { YoutubePlayerComponent } from './youtube-player/youtube-player.component';



@NgModule({
  declarations: [DrawerComponent, YoutubePlayerComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
