import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ClickToCallDialogComponent } from '../click-to-call-dialog/click-to-call-dialog.component';

@Component({
  selector: 'app-click-to-call',
  templateUrl: './click-to-call.component.html',
  styleUrls: ['./click-to-call.component.scss']
})
export class ClickToCallComponent implements OnInit {

  @Input() phoneNumber: string;

  constructor(
    private dialog: MatDialog
  ) { }

  ngOnInit() {
  }

  openDialog() {
    if (!this.phoneNumber) {
      return;
    }
    this.dialog.open(ClickToCallDialogComponent, {
      width: '350px',
      data: {
        phoneNumber: this.phoneNumber
      }
    });
  }

}
