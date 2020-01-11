import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NgSelectModule } from "@ng-select/ng-select";
import { ClipboardModule } from "ngx-clipboard";
import { DrawerComponent } from "./drawer/drawer.component";
import { YoutubePlayerComponent } from "./youtube-player/youtube-player.component";
import { UserSearchComponent } from "./user-search/user-search.component";
import { StateSelectionComponent } from "./state-selection-dropdown/state-selection.component";
import { MaterialModule } from "./material/material.module";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { TopBarComponent } from "./top-bar/top-bar.component";
import { StateSelectionPaneComponent } from "./state-selection-pane/state-selection-pane.component";
import { FilterPipe } from "./utils/filter.pipe";
import { ClickToCallComponent } from "./click-to-call/click-to-call.component";
import { ClickToCallDialogComponent } from "./click-to-call-dialog/click-to-call-dialog.component";
import { ImageUploadComponent } from "./image-upload/image-upload.component";
import { CampusRopeIScrollComponent } from "./campusrope-infinite-scroll/campusrope-infinite-scroll.component";
import { CampusRopeISListComponent } from "./campusrope-infinite-scroll/campusrope-infinite-list/campusrope-infinite-list.component";
import { CampusRopeISYoutubeComponent } from "./campusrope-infinite-scroll/campusrope-infinite-youtube/campusrope-infinite-youtube.component";
import { ClickToOpenComponent } from "./click-to-open/click-to-open.component";
import { ClickToOpenDialogComponent } from "./click-to-open-dialog/click-to-open-dialog.component";
import { MaterailDialogComponent } from "./materail-dialog/materail-dialog.component";
import { ConcatUrlPipe } from "./campusrope-infinite-scroll/concat-url.pipe";
import { SearchableStateSelectionComponent } from "./searchable-state-selection/searchable-state-selection.component";
import { SocialNetworkIconsComponent } from "./social-network-icons/social-network-icons.component";
import { SafePipe } from "./safe.pipe";

@NgModule({
  declarations: [
    TopBarComponent,
    DrawerComponent,
    YoutubePlayerComponent,
    UserSearchComponent,
    StateSelectionPaneComponent,
    FilterPipe,
    ConcatUrlPipe,
    StateSelectionComponent,
    ClickToCallComponent,
    ClickToCallDialogComponent,
    ClickToOpenComponent,
    ClickToOpenDialogComponent,
    ImageUploadComponent,
    CampusRopeIScrollComponent,
    CampusRopeISListComponent,
    CampusRopeISYoutubeComponent,
    MaterailDialogComponent,
    SearchableStateSelectionComponent,
    SocialNetworkIconsComponent,
    SafePipe
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    ClipboardModule
  ],
  exports: [
    MaterialModule,
    ClipboardModule,
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
    CampusRopeISListComponent,
    CampusRopeISYoutubeComponent,
    ImageUploadComponent,
    UserSearchComponent,
    ClickToCallComponent,
    ClickToCallDialogComponent,
    ClickToOpenComponent,
    ClickToOpenDialogComponent,
    SocialNetworkIconsComponent,
    SafePipe,
    SearchableStateSelectionComponent
  ],
  entryComponents: [
    ClickToOpenDialogComponent,
    ClickToCallDialogComponent,
    MaterailDialogComponent
  ]
})
export class SharedModule {}
