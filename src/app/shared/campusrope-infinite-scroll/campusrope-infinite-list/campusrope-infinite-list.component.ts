import { Component, OnInit } from '@angular/core';
import { CampusRopeIScrollComponent } from '../campusrope-infinite-scroll.component';

@Component({
  selector: 'app-campusrope-infinite-list',
  templateUrl: './campusrope-infinite-list.component.html',
  styleUrls: ['./campusrope-infinite-list.component.scss']
})
export class CampusropeInfiniteListComponent extends CampusRopeIScrollComponent implements OnInit {


  ngOnInit() {
  }

}
