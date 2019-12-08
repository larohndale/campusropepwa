import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/core/services/common.service';
import { TableNames } from '../../../../core/config/TableNames';
import { MatDialog, } from '@angular/material/dialog';
import { AdminTrendingStatesDialoug } from './admin-trending-states-dialoug/admin-trending-states-dialoug.component';

@Component({
  selector: 'app-admin-trending',
  templateUrl: './admin-trending.component.html',
  styleUrls: ['./admin-trending.component.scss']
})
export class AdminTrendingComponent implements OnInit {

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
      width: window.innerWidth * .65 + 'px',
      height: window.innerHeight - elem.clientHeight + 'px',
      data: states,
    });
    dialogRef.afterClosed().
      subscribe(result => {
        console.log('The dialog was closed');
      });
  }

  ngOnInit() {

    /* this.commonService.getData()
      .subscribe(data => {
        console.log("TCL: AdminTrendingComponent -> ngOnInit -> data", data)
      }) */
  }

}


