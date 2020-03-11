import { Component, OnInit, Input, Pipe, PipeTransform } from "@angular/core";
import { CampusRopeIScrollComponent } from "../campusrope-infinite-scroll.component";
import { YoutubePlayerService } from 'ngx-youtube-player';

@Component({
  selector: "campusrope-infinite-youtube",
  templateUrl: "./campusrope-infinite-youtube.component.html",
  styleUrls: ["./campusrope-infinite-youtube.component.scss"]
})
export class CampusRopeISYoutubeComponent extends CampusRopeIScrollComponent
  implements OnInit {
  showData: boolean = false;
  active: boolean = true;
  oldScrollTop = 0;
  count = 0;
  scrollTop: number = 0;

  // const opts = {
  //   height: '390',
  //   width: '640',
  //   playerVars: { // https://developers.google.com/youtube/player_parameters
  //     autoplay: 1
  //   }
  // };

 
  ngOnInit() {
    super.ngOnInit();
    super.getData().then(_ => {
      this.showData = true;
      this.sampledatasource.map((item, i) => {
        i == 0 ? (item.youtubeUrl = item.youtubeUrl + "?autoplay=1&mute=1&vq=medium") : item.youtubeUrl;
        item['youtubeID'] = item.youtubeUrl.replace("https://www.youtube.com/embed/","").replace("?autoplay=1&mute=1&vq=medium","");
      }
      );
      // console.log(this.sampledatasource);
    });
    window.addEventListener("scroll", this.scroll, true);
  }

  ngOnDestroy() {
    window.removeEventListener("scroll", this.scroll, true);
  }
  

  scroll = (e): void => {
    if (this.active) {
      setTimeout(() => {
        // console.log("scroll")
         this.callback(e)
      }, 1000);
    }
    this.active = false;
  };

  callback(e) {
    if (e.srcElement.scrollTop > this.scrollTop) {
      this.scrollTop += e.srcElement.offsetHeight / 2;
      this.count++;
    }

    if (this.oldScrollTop > e.srcElement.scrollTop) {
      if (this.count == 0) {
        this.count = 0;
      } else {
        this.count -= 1;
      }
      this.scrollTop -= e.srcElement.offsetHeight / 2;
    }

    this.sampledatasource.map((item, i) => {
      i === this.count ? (item.youtubeUrl = item.youtubeUrl + "?autoplay=1&mute=1&vq=medium") : (item.youtubeUrl = this.removeURLParameter(item.youtubeUrl));
      item['youtubeID'] = item.youtubeUrl.replace("https://www.youtube.com/embed/","").replace("?autoplay=1&mute=1&vq=medium","");
    }
    );
    // console.log(this.sampledatasource);
    this.active = true;

    this.oldScrollTop = e.srcElement.scrollTop;
  }

  
  previousVideo = "";
  onStateChange(sample, event) {
    // console.log(event);
    // console.log(sample);

    // console.log(sample['youtubeID'] + " " + this.youtubeService.isPlaying(sample['player']));
    console.log(event.data);
    if(event.data == 3){
      if(this.previousVideo == "") {
        this.previousVideo = sample['youtubeID'];
      } else if(this.previousVideo != sample['youtubeID']) {
        this.sampledatasource.forEach(item => {
            if(this.previousVideo == item['youtubeID']) {
              if(this.youtubeService.isPlaying(item['player'])){
                console.log("stopVideo" + item['youtubeID'])
                item['player'].stopVideo();
                this.previousVideo = "";
              }
            }
        });
        this.previousVideo = sample['youtubeID'];
      }
    }
    


    //  console.log();
    // // console.log(event);
    // // console.log(this.previousVideo);
    // // console.log(this.previousVideo + " " + sample['youtubeID']);
    // // console.log(this.previousVideo == sample['youtubeID']);
    // if(this.previousVideo == sample['youtubeID']){
    //   return;
    // } else if(this.previousVideo == "") {
    //   this.previousVideo = sample['youtubeID'];
    // } else {
    //   this.sampledatasource.forEach(item => {
    //       if(this.previousVideo == item['youtubeID'] && this.previousVideo != sample['youtubeID']) {
    //         if(this.youtubeService.isPlaying(item['player'])){
    //           item['player'].stopVideo();
    //           this.previousVideo = "";
    //         }
    //       }
    //   });
    // }

    

    // if(this.previousVideo == ""){
    //   this.previousVideo = sample['youtubeID'];
    // } else{
    //   if(this.previousVideo == item['youtubeID']) {
    //     if(item['player']){
    //       item['player'].stopVideo();
    //       this.previousVideo = sample['youtubeID'];
    //     }
    //   }
    // }


  }

  youtubePlayVideo() {
    // alert('hai');
    console.log("youtubePlayVideo");
  }

  savePlayer(sample, player) {
    // console.log(sample);
    // console.log(player);
    console.log(sample['youtubeID']);
    sample['player'] = player;
  }
  
  removeURLParameter(url) {
    var oldURL = url;
    var index = 0;
    var newURL = oldURL;
    index = oldURL.indexOf("?");
    if (index == -1) {
      index = oldURL.indexOf("#");
    }
    if (index != -1) {
      newURL = oldURL.substring(0, index);
    }
    return newURL;
  }
}
