import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/core/services/common.service';
import { TableNames } from '../../../../core/config/TableNames';
import { MatDialog, } from '@angular/material/dialog';
import { AdminTrendingStatesDialoug } from './admin-trending-states-dialoug/admin-trending-states-dialoug.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-trending',
  templateUrl: './admin-trending.component.html',
  styleUrls: ['./admin-trending.component.scss']
})
export class AdminTrendingComponent implements OnInit {
  selectedState: string = "Select State"
  constructor(public dialog: MatDialog, public readonly commonService: CommonService) { }

  openDialog(): void {
    this.commonService.getState()
      .subscribe(states => {
        this.dialogueActivity(states)
      })
  }

  dialogueActivity(states) {
    const elem = document.querySelector(".mat-toolbar-single-row")
    const dialogRef = this.dialog.open(AdminTrendingStatesDialoug, {
      panelClass: "admin-trending-states-dialoug",
      width: window.innerWidth + 'px',
      height: window.innerHeight - elem.clientHeight + 'px',
      data: states,
      disableClose: true
    });
    dialogRef.afterClosed().
      subscribe(result => {
        this.selectedState = result.name
        console.log('The dialog was closed', result);
      });
  }

  ngOnInit() {

    /* this.commonService.getData()
      .subscribe(data => {
        console.log("TCL: AdminTrendingComponent -> ngOnInit -> data", data)
      }) */
  }


}


