import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../../../core/services/common.service';

@Component({
  selector: 'app-user-zenyoga',
  templateUrl: './user-zenyoga.component.html',
  styleUrls: ['./user-zenyoga.component.scss']
})
export class UserZenYogaComponent implements OnInit {

  constructor(public commonService: CommonService) { }

  ngOnInit() {
  }

}
