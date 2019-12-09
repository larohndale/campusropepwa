import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/core/services/common.service';
import { TableNames } from '../../../../core/config/TableNames';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-trending',
  templateUrl: './admin-trending.component.html',
  styleUrls: ['./admin-trending.component.scss']
})
export class AdminTrendingComponent implements OnInit {

  

  constructor(private readonly commonService: CommonService,private router:Router) { }

  ngOnInit() {
    
    /* this.commonService.getData()
      .subscribe(data => {
        console.log("TCL: AdminTrendingComponent -> ngOnInit -> data", data)
      }) */
  }

 
}
