import { Component, OnInit, Pipe, PipeTransform , ViewChild, AfterViewChecked, ElementRef} from '@angular/core';
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
  
  _ytUpdatedData:any[];
  defaultYTV:any = this._ytData[0];
  active:boolean = true
  oldScrollTop = 0
  count = 0
  scrollTop: number = 0;
  offsetHeight: any;
  currentScrollTop: any;
  constructor(public sanitizer: DomSanitizer) { 
    this._ytUpdatedData = this._ytData.filter((e,i)=> i!=0);
    console.log(this._ytUpdatedData)
  }

  ngOnInit() {
    window.addEventListener('scroll', this.scroll, true); 
  }
 
  ngOnDestroy() {
      window.removeEventListener('scroll', this.scroll, true);
  }
  // trackById(index, contact) {
  //     // console.log(contact)
  //   return contact.id;
  // }
  scroll = (e): void => {  
    if(this.active){
      setTimeout(()=>{
       this.callback(e)
      },500)
   }
   this.active = false
  };
  callback(e){
    console.log(e)
    // this.scrollTop =e.srcElement.scrollTop 
    this.offsetHeight =e.srcElement.offsetHeight 
    this.currentScrollTop = e.srcElement.scrollTop

    if (e.srcElement.scrollTop > this.scrollTop ){
      console.log('increased')
      this.scrollTop += e.srcElement.offsetHeight
              this.count++
   
    } 
    if(this.oldScrollTop > e.srcElement.scrollTop){
      console.log('decreased')
      this.count -= 1
      this.scrollTop -= e.srcElement.offsetHeight

    }
    var element = document.getElementById('iframe'+this.count);
    // this.defaultYTV = this._ytData[this.count]
   
    // this._ytUpdatedData = this._ytData.filter((e,i)=> i!=this.count);
    
    console.log(this.count)
    this.active =  true
    this.oldScrollTop = e.srcElement.scrollTop
  }

}
