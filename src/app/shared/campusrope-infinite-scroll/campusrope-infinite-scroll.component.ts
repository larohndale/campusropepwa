import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';



@Component({
  selector: 'campusrope-infinite-scroll',
  templateUrl: './campusrope-infinite-scroll.component.html',
  styleUrls: ['./campusrope-infinite-scroll.component.scss']
})
export class CampusRopeIScrollComponent {

  @Input() YT = [];
  @Output() select = new EventEmitter();

  heading = 'INFINITE SCROLL';

  selectVideo(video) {
    this.select.emit(video);
  }
  

}

