import { Component, OnInit, Input } from '@angular/core';



@Component({
  selector: 'campusrope-infinite-scroll',
  templateUrl: './campusrope-infinite-scroll.component.html',
  styleUrls: ['./campusrope-infinite-scroll.component.scss']
})
export class CampusRopeIScrollComponent implements OnInit {

  @Input() apiurl : string;
  @Input() datasource  : any[];
  @Input() youtube  : boolean;
  
  public sampledatasource : any[]
  public videos = ["https://www.youtube.com/embed/LHKHcmgAAeM",
  "https://www.youtube.com/embed/q16hYtu-1IM",
  "https://www.youtube.com/embed/q16hYtu-1IM"
  ]

  constructor(
    
  ) { }

  ngOnInit() {
    console.log(this.datasource,"datasource")
    // this.sampledatasource = [];
    // this.sampledatasource.push( { "title" : "mytitle" });
    // this.sampledatasource.push( { "title" : "safsdf" });
    // this.sampledatasource.push( { "title" : "gssadgsda" });
    // this.sampledatasource.push( { "title" : "asfdsfad" });
    // this.sampledatasource.push( { "title" : "rewrwrqer" });
    // this.sampledatasource.push( { "title" : "sffsdafsd" });
    // this.sampledatasource.push( { "title" : "sfdfsadfsad" });
    // this.sampledatasource.push( { "title" : "sadffsdsfa" });

  }

  

}

