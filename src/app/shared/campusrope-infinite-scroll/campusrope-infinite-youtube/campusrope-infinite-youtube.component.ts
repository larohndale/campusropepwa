import { Component, OnInit } from '@angular/core';
import { CampusRopeIScrollComponent } from '../campusrope-infinite-scroll.component';

@Component({
  selector: 'campusrope-infinite-youtube',
  templateUrl: './campusrope-infinite-youtube.component.html',
  styleUrls: ['./campusrope-infinite-youtube.component.scss']
})
export class CampusRopeISYoutubeComponent extends CampusRopeIScrollComponent implements OnInit {

  ngOnInit() {

    super.ngOnInit();
  }

}
