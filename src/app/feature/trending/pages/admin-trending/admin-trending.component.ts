import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/core/services/common.service';

@Component({
  selector: 'app-admin-trending',
  templateUrl: './admin-trending.component.html',
  styleUrls: ['./admin-trending.component.scss']
})
export class AdminTrendingComponent implements OnInit {

  constructor(private readonly commonService: CommonService) { }

  ngOnInit() {
    console.log(this.commonService.getTrendingData()
      .subscribe(data => {
        console.log("TCL: AdminTrendingComponent -> ngOnInit -> data", data)
      }))
  }

}
