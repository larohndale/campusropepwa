import { Component, OnInit } from '@angular/core';

const YT = [
  { link: "link1" },
  { link: "link2" },
  { link: "link3" },
];

@Component({
  selector: 'app-user-trending',
  templateUrl: './user-trending.component.html',
  styleUrls: ['./user-trending.component.scss']
})
export class UserTrendingComponent implements OnInit {

  displayContent:boolean = true;
  YT = YT;
  link:string

  constructor() { }

  ngOnInit() { }
  selectedVideo(event) {
    this.link = event
  }
}
