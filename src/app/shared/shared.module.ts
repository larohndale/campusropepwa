import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrawerComponent } from './drawer/drawer.component';
import { YoutubePlayerComponent } from './youtube-player/youtube-player.component';
import { UserSearchComponent } from './user-search/user-search.component';



@NgModule({
  declarations: [DrawerComponent, YoutubePlayerComponent, UserSearchComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
