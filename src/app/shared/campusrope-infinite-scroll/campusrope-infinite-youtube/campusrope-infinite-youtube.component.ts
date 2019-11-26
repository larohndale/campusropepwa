import { Component, OnInit, Input, Pipe, PipeTransform } from '@angular/core';
import { CampusRopeIScrollComponent } from '../campusrope-infinite-scroll.component';


@Component({
  selector: 'campusrope-infinite-youtube',
  templateUrl: './campusrope-infinite-youtube.component.html',
  styleUrls: ['./campusrope-infinite-youtube.component.scss']
})
export class CampusRopeISYoutubeComponent extends CampusRopeIScrollComponent implements OnInit {
  

  active: boolean = true
  oldScrollTop = 0
  count = 0
  scrollTop: number = 0;

  ngOnInit() {

    super.ngOnInit();
    this.sampledatasource.map((item, i) => i == 0 ? item.youtubelink = item.youtubelink + '?autoplay=1&mute=1&vq=medium' : item.youtubelink)
    window.addEventListener('scroll', this.scroll, true);

  }

  ngOnDestroy() {

    window.removeEventListener('scroll', this.scroll, true);

  }

  scroll = (e): void => {

    if (this.active) {
      setTimeout(() => {
        this.callback(e)
      }, 1000)
    }
    this.active = false

  };

  callback(e) {

    if (e.srcElement.scrollTop > this.scrollTop) {

      this.scrollTop += e.srcElement.offsetHeight / 2
      this.count++
    }

    if (this.oldScrollTop > e.srcElement.scrollTop) {
      if (this.count == 0) {
        this.count = 0
      } else {
        this.count -= 1
      }
      this.scrollTop -= e.srcElement.offsetHeight / 2
    }

    this.sampledatasource.map((item, i) => i === this.count ? item.youtubelink = item.youtubelink + '?autoplay=1&mute=1&vq=medium' : item.youtubelink = this.removeURLParameter(item.youtubelink))
    this.active = true

    this.oldScrollTop = e.srcElement.scrollTop
  }

  removeURLParameter(url) {

    var oldURL = url
    var index = 0;
    var newURL = oldURL;
    index = oldURL.indexOf('?');
    if (index == -1) {
      index = oldURL.indexOf('#');
    }
    if (index != -1) {
      newURL = oldURL.substring(0, index);
    }
    return newURL;
    
  }

}
