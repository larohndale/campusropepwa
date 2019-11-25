import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
@Pipe({ name: 'safe' })

export class SafePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}
  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}

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
  
 
  active:boolean = true
  oldScrollTop = 0
  count = 0
  scrollTop: number = 0;
  constructor(public sanitizer: DomSanitizer) { }

  ngOnInit() {
    this._ytData.map((iframe,i)=> i==0?iframe.iframe = iframe.iframe+'?autoplay=1&mute=1&vq=medium':iframe.iframe)
    window.addEventListener('scroll', this.scroll, true); 
  }
 
  ngOnDestroy() {
      window.removeEventListener('scroll', this.scroll, true);
  }
  scroll = (e): void => {  
    if(this.active){
      setTimeout(()=>{
        this.callback(e)
      },1000)
    }
    this.active = false
  };

  callback(e){
    if (e.srcElement.scrollTop > this.scrollTop ) {

        this.scrollTop += e.srcElement.offsetHeight/2
        this.count++
    } 

    if (this.oldScrollTop > e.srcElement.scrollTop) {
        if (this.count == 0) {
            this.count = 0
        } else {
            this.count -= 1
        }
        this.scrollTop -= e.srcElement.offsetHeight/2
    }

    this._ytData.map((iframe,i)=> i===this.count?iframe.iframe = iframe.iframe+'?autoplay=1&mute=1&vq=medium':iframe.iframe =this.removeURLParameter(iframe.iframe))
    this.active =  true

    this.oldScrollTop = e.srcElement.scrollTop
  }

  removeURLParameter(url) {
      var oldURL = url
      var index = 0;
      var newURL = oldURL;
      index = oldURL.indexOf('?');
      if(index == -1){
          index = oldURL.indexOf('#');
      }
      if(index != -1){
          newURL = oldURL.substring(0, index);
      }
      return newURL;
  }

}
