import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-click-to-call-dialog',
  templateUrl: './click-to-call-dialog.component.html',
  styleUrls: ['./click-to-call-dialog.component.scss']
})
export class ClickToCallDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ClickToCallDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
  }

  getPhoneNo() {
    return `tel:${this.data.phoneNumber}`;
  }

  copyText() {
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = this.data.phoneNumber;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }

}
