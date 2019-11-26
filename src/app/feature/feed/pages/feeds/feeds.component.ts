import { Component, OnInit} from '@angular/core';
@Component({
  selector: 'app-feeds',
  templateUrl: './feeds.component.html',
  styleUrls: ['./feeds.component.scss']
})

export class FeedsComponent implements OnInit  {
  
  _ytData = [{
    "name": 1,
    "iframe": "https://www.youtube.com/embed/UpQbySufiak"
  }, {
    "name": 2,
    "iframe": "https://www.youtube.com/embed/MrMZzI7TOUk"
  }, {
    "name": 3,
    "iframe": "https://www.youtube.com/embed/mV1zX2O91hk"
  }, {
    "name": 4,
    "iframe": "https://www.youtube.com/embed/e24qXJvGK2I"
  }, {
    "name": 5,
    "iframe": "https://www.youtube.com/embed/zhllkjYYUVE"
  }, {
    "name": 6,
    "iframe": "https://www.youtube.com/embed/e24qXJvGK2I"    
  }, {
    "name": 7,
    "iframe": "https://www.youtube.com/embed/zhllkjYYUVE"
  }, {
    "name": 8,
    "iframe": "https://www.youtube.com/embed/mV1zX2O91hk"
  }, {
    "name": 9,
    "iframe": "https://www.youtube.com/embed/zhllkjYYUVE"

  }, {
    "name": 10,
    "iframe": "https://www.youtube.com/embed/UpQbySufiak"

  }]
  
  constructor() { }

  ngOnInit() {
    
  }
}
