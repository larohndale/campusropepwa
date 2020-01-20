import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../../../core/services/common.service';

@Component({
  selector: 'app-user-trending',
  templateUrl: './user-trending.component.html',
  styleUrls: ['./user-trending.component.scss']
})
export class UserTrendingComponent implements OnInit {

  constructor(public commonService: CommonService) { }

  ngOnInit() {
  }

}
