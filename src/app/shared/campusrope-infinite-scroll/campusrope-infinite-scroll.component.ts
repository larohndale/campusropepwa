import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  Pipe,
  PipeTransform
} from "@angular/core";
import { ITrending } from "src/app/core/models/trending";
import { CommonService } from "src/app/core/services/common.service";
import { TableNames } from "../../core/config/TableNames";
import { Router } from "@angular/router";
import { YoutubePlayerService } from 'ngx-youtube-player';

@Component({
  selector: "campusrope-infinite-scroll",
  templateUrl: "./campusrope-infinite-scroll.component.html",
  styleUrls: ["./campusrope-infinite-scroll.component.scss"]
})
export class CampusRopeIScrollComponent implements OnInit {
  @Input() apiurl: String = "";
  @Input() datasource: any[];
  @Input() youtube: Boolean;
  @Output() select = new EventEmitter();

  public sampledatasource: ITrending[];

  constructor(
    private readonly commonService: CommonService,
    public router: Router,
    public youtubeService: YoutubePlayerService
  ) {
    console.log("this.apiurl :" + this.apiurl);
  }

  ngOnInit() {
    this.getData();
    console.log("this.apiurl :" + this.apiurl);
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
    console.log("this.apiurl :" + this.apiurl);

    if(this.apiurl === "zenyoga"){

      // https://youtu.be/w_OLzeoEims
      // https://youtu.be/Cs9g7M2sOGs
      // https://youtu.be/jYJHHeMyZLU
      // https://youtu.be/TBcSNUeEOYw
      // https://youtu.be/-smIS9ucYIA
      // https://youtu.be/T2vduf6L2xE
      // https://youtu.be/9et-6Ianbyo
      // https://youtu.be/deeJuB30OsI
      // https://youtu.be/mdtOD3Z7oJ4
      // https://youtu.be/D-X9TloL-WQ
      // https://youtu.be/ejvYfqQjGcA
      // https://youtu.be/EDAPk4QGxyc
      // https://youtu.be/PrNI39qqjks
      // https://youtu.be/10ec0usDraM
      // https://youtu.be/upOogs9p6_Y

      var zenyoga = [
      "https://www.youtube.com/embed/w_OLzeoEims",
      "https://www.youtube.com/embed/Cs9g7M2sOGs",
      "https://www.youtube.com/embed/jYJHHeMyZLU",
      "https://www.youtube.com/embed/TBcSNUeEOYw",
      "https://www.youtube.com/embed/-smIS9ucYIA",
      "https://www.youtube.com/embed/T2vduf6L2xE",
      "https://www.youtube.com/embed/9et-6Ianbyo",
      "https://www.youtube.com/embed/deeJuB30OsI",
      "https://www.youtube.com/embed/mdtOD3Z7oJ4",
      "https://www.youtube.com/embed/D-X9TloL-WQ",
      "https://www.youtube.com/embed/ejvYfqQjGcA",
      "https://www.youtube.com/embed/EDAPk4QGxyc",
      "https://www.youtube.com/embed/PrNI39qqjks",
      "https://www.youtube.com/embed/10ec0usDraM",
      "https://www.youtube.com/embed/upOogs9p6_Y",
      "https://www.youtube.com/embed/y2XGVynUTE8",
      "https://www.youtube.com/embed/X5m49sBSKGI",
      "https://www.youtube.com/embed/tzSyrDsfHX8",
      "https://www.youtube.com/embed/CHL3u8DHhEY",
      "https://www.youtube.com/embed/HQtOGi6t710",
      "https://www.youtube.com/embed/Fx91-h2B_jg",
      "https://www.youtube.com/embed/lO_Y7wKXMFs",
      "https://www.youtube.com/embed/lobWPHvRc-I",
      "https://www.youtube.com/embed/M2g-eaBmpeI",
      "https://www.youtube.com/embed/AawjMfPqEvg",
      "https://www.youtube.com/embed/pyLXk7y0olA",
      "https://www.youtube.com/embed/8r_yZSaFUL0",
      "https://www.youtube.com/embed/C1Yn0RWMh2w",
      "https://www.youtube.com/embed/BADprJFCCIQ"]

      this.sampledatasource = [];
      for(var i=0; i<=28; i++){
        this.sampledatasource.push({ youtubeUrl : zenyoga[i], _id: "", headline : "" , name : "",  state : "", topic : {}, client : {} });
      }
      
      return new Promise(res => {
        res();
      });
    

  //     _id: string;
  // headline: string;
  // name: string;
  // youtubeUrl: string;
  // state: string;
  // topic: {};
  // client: {};

    } else {
      return new Promise(res => {
        const url = this.apiurl;
        this.commonService.getData(url).subscribe((data: ITrending[]) => {
          // console.log(data);
          this.sampledatasource = data;
          res();
        });
      });
    }
    
    
  }

  selectDataFromSource(data: any) {
    console.log(data);
    this.select.emit(data);
    this.router.navigate(["/trending/admin"]);
  }
}
