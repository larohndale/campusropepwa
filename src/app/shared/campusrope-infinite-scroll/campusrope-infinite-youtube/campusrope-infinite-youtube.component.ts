import { Component, OnInit, Input, Pipe, PipeTransform, ElementRef, ViewChild, } from '@angular/core';
import { CampusRopeIScrollComponent } from '../campusrope-infinite-scroll.component';


@Component({
  selector: 'campusrope-infinite-youtube',
  templateUrl: './campusrope-infinite-youtube.component.html',
  styleUrls: ['./campusrope-infinite-youtube.component.scss']
})
export class CampusRopeISYoutubeComponent extends CampusRopeIScrollComponent implements OnInit {
  
  @ViewChild('infiniteYT', {static: false}) infiniteYT: ElementRef;
  count = 0
  savedscrollTop: number = 0;

  ngOnInit() {
    super.ngOnInit();
    this.sampledatasource.map((item, i) => i == 0 ? item.youtubelink = item.youtubelink + '?autoplay=1&mute=1&vq=medium' : item.youtubelink)
    window.addEventListener('scroll', this.scroll, true);

  }

  ngOnDestroy() {

    window.removeEventListener('scroll', this.scroll, true);

  }

  scroll = (e): void => {  
      if(this.count == 0){
        this.savedscrollTop = 0
      }   
      if( this.savedscrollTop < e.srcElement.scrollTop && (e.srcElement.scrollTop - this.savedscrollTop)  > (this.infiniteYT.nativeElement.offsetHeight-50)){
        this.count++
        this.savedscrollTop = e.srcElement.scrollTop
        this.callback( this.count)
      }
      
      if( this.savedscrollTop > e.srcElement.scrollTop &&  (this.infiniteYT.nativeElement.offsetHeight-50) < (this.savedscrollTop- (e.srcElement.scrollTop-20) )){
          this.count--
          this.savedscrollTop = e.srcElement.scrollTop
          this.callback( this.count)
      }
  };

  callback(e) {
    this.sampledatasource.map((item, i) => i === e ? item.youtubelink = item.youtubelink + '?autoplay=1&mute=1&vq=medium' : item.youtubelink = this.removeURLParameter(item.youtubelink))
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
