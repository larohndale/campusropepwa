import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MaterailDialogComponent } from 'src/app/shared/materail-dialog/materail-dialog.component';
import { CommonService } from 'src/app/core/services/common.service';

@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.scss']
})
export class TopicsComponent implements OnInit {

  constructor(private readonly commonService: CommonService,public dialog: MatDialog) { }
  ngOnInit() {
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(MaterailDialogComponent, {
      width: '250px',
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  
   
  }

 

}
