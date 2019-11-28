import { Component, OnInit, Input, Output, EventEmitter, Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { TrendingService } from 'src/app/feature/trending/services/trending.service';
import { ITrending } from 'src/app/core/models/trending';

@Pipe({
  name: 'safe'
})
export class SafePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) { }
  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
@Component({
  selector: 'campusrope-infinite-scroll',
  templateUrl: './campusrope-infinite-scroll.component.html',
  styleUrls: ['./campusrope-infinite-scroll.component.scss']
})
export class CampusRopeIScrollComponent implements OnInit {

  @Input() apiurl: string;
  @Input() datasource: any[];
  @Input() youtube: boolean;
  @Output() select = new EventEmitter();

  public sampledatasource: ITrending[];

  constructor(private readonly trendingService: TrendingService) {

  }

  ngOnInit() {
    // this.sampledatasource.push({ "title": "mytitle", "youtubelink": "https://www.youtube.com/embed/UpQbySufiak" });
    // this.sampledatasource.push({ "title": "safsdf", "youtubelink": "https://www.youtube.com/embed/MrMZzI7TOUk" });
    // this.sampledatasource.push({ "title": "gssadgsda", "youtubelink": "https://www.youtube.com/embed/mV1zX2O91hk" });
    // this.sampledatasource.push({ "title": "asfdsfad", "youtubelink": "https://www.youtube.com/embed/e24qXJvGK2I" });
    // this.sampledatasource.push({ "title": "rewrwrqer", "youtubelink": "https://www.youtube.com/embed/zhllkjYYUVE" });
    // this.sampledatasource.push({ "title": "sffsdafsd", "youtubelink": "https://www.youtube.com/embed/e24qXJvGK2I" });
    // this.sampledatasource.push({ "title": "sfdfsadfsad", "youtubelink": "https://www.youtube.com/embed/zhllkjYYUVE" });
    // this.sampledatasource.push({ "title": "sadffsdsfa", "youtubelink": "https://www.youtube.com/embed/mV1zX2O91hk" });
  }

  getTrendingData() {
    return new Promise((res) => {
      this.trendingService.getTrendingData()
        .subscribe((data: ITrending[]) => {
          this.sampledatasource = data;
          res()
        })
    })
  }

  selectDataFromSource(data: any) {
    console.log(data);
    this.select.emit(data);
  }


}

