import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-materail-dialog',
  templateUrl: './materail-dialog.component.html',
  styleUrls: ['./materail-dialog.component.scss']
})
export class MaterailDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<MaterailDialogComponent>,
    ) {
      
    }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

}
