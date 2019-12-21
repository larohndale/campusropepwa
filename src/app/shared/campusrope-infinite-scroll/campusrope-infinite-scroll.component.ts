import { Component, OnInit, Input, Output, EventEmitter, Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ITrending } from 'src/app/core/models/trending';
import { CommonService } from 'src/app/core/services/common.service';
import { TableNames } from '../../core/config/TableNames';
import { Router } from '@angular/router';


@Component({
  selector: 'campusrope-infinite-scroll',
  templateUrl: './campusrope-infinite-scroll.component.html',
  styleUrls: ['./campusrope-infinite-scroll.component.scss']
})
export class CampusRopeIScrollComponent implements OnInit {

  @Input() apiurl: String = "";
  @Input() datasource: any[];
  @Input() youtube: Boolean;
  @Output() select = new EventEmitter();

  public sampledatasource: ITrending[];

  constructor(private readonly commonService: CommonService,public router:Router) {
    console.log("this.apiurl :" + this.apiurl)
  }

  ngOnInit() {

    this.getData();
    console.log("this.apiurl :" + this.apiurl)
    // this.sampledatasource.push({ "title": "mytitle", "youtubelink": "https://www.youtube.com/embed/UpQbySufiak" });
    // this.sampledatasource.push({ "title": "safsdf", "youtubelink": "https://www.youtube.com/embed/MrMZzI7TOUk" });
    // this.sampledatasource.push({ "title": "gssadgsda", "youtubelink": "https://www.youtube.com/embed/mV1zX2O91hk" });
    // this.sampledatasource.push({ "title": "asfdsfad", "youtubelink": "https://www.youtube.com/embed/e24qXJvGK2I" });
    // this.sampledatasource.push({ "title": "rewrwrqer", "youtubelink": "https://www.youtube.com/embed/zhllkjYYUVE" });
    // this.sampledatasource.push({ "title": "sffsdafsd", "youtubelink": "https://www.youtube.com/embed/e24qXJvGK2I" });
    // this.sampledatasource.push({ "title": "sfdfsadfsad", "youtubelink": "https://www.youtube.com/embed/zhllkjYYUVE" });
    // this.sampledatasource.push({ "title": "sadffsdsfa", "youtubelink": "https://www.youtube.com/embed/mV1zX2O91hk" });
  }

  getData() {
    console.log("this.apiurl :" + this.apiurl)
    return new Promise((res) => {
      const url = this.apiurl;
      this.commonService.getData(url)
        .subscribe((data: ITrending[]) => {
          this.sampledatasource = data;
          res()
        })
    })
  }

  selectDataFromSource(data: any) {
    console.log(data);
    this.select.emit(data);
    this.router.navigate(['/trending/admin'])
  }


}

@Pipe({
  name: 'safe'
})
export class SafePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) { }
  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url).toString();
  }
}