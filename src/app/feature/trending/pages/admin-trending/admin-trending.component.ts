import { Component, OnInit } from '@angular/core';
import { TrendingService } from 'src/app/core/services/trending.service';

@Component({
  selector: 'app-admin-trending',
  templateUrl: './admin-trending.component.html',
  styleUrls: ['./admin-trending.component.scss']
})
export class AdminTrendingComponent implements OnInit {

  constructor(private readonly trendingService: TrendingService) { }

  ngOnInit() {
    console.log(this.trendingService.getTrendingData()
      .subscribe(data => {
        console.log("TCL: AdminTrendingComponent -> ngOnInit -> data", data)
      }))
  }

}
