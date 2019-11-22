import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgSelectModule } from '@ng-select/ng-select';
import { DrawerComponent } from './drawer/drawer.component';
import { YoutubePlayerComponent } from './youtube-player/youtube-player.component';
import { UserSearchComponent } from './user-search/user-search.component';
import { StateSelectionComponent } from './state-selection-dropdown/state-selection.component';
import { MaterialModule } from './material/material.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TopBarComponent } from './top-bar/top-bar.component';
import { StateSelectionPaneComponent } from './state-selection-pane/state-selection-pane.component';
import { FilterPipe } from './utils/filter.pipe';
import { ClickToCallComponent } from './click-to-call/click-to-call.component';
import { ClickToCallDialogComponent } from './click-to-call-dialog/click-to-call-dialog.component';
import { DialogModalComponent } from './dialog-modal/dialog-modal.component';
import { ImageUploadComponent } from './image-upload/image-upload.component';
import { CampusRopeIScrollComponent } from './campusrope-infinite-scroll/campusrope-infinite-scroll.component';
import { CampusropeInfiniteListComponent } from './campusrope-infinite-scroll/campusrope-infinite-list/campusrope-infinite-list.component';
import { CampusropeInfiniteYoutubeComponent } from './campusrope-infinite-scroll/campusrope-infinite-youtube/campusrope-infinite-youtube.component';

@NgModule({
  declarations: [
    TopBarComponent,
    DrawerComponent,
    YoutubePlayerComponent,
    UserSearchComponent,
    StateSelectionPaneComponent,
    FilterPipe,
    StateSelectionComponent,
    ClickToCallComponent,
    ClickToCallDialogComponent,
    DialogModalComponent,
    ImageUploadComponent,
    CampusRopeIScrollComponent,
    CampusropeInfiniteListComponent,
    CampusropeInfiniteYoutubeComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule
  ],
  exports: [
    MaterialModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    TopBarComponent,
    DrawerComponent,
    StateSelectionPaneComponent,
    FilterPipe,
    StateSelectionComponent,
    NgSelectModule,
    ClickToCallComponent,
    CampusRopeIScrollComponent,
    DialogModalComponent,
    ImageUploadComponent,
    UserSearchComponent,
    CampusropeInfiniteYoutubeComponent,
    CampusropeInfiniteListComponent
  ],
  entryComponents: [DialogModalComponent]
})
export class SharedModule {}
