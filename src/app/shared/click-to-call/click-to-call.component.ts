import { Component, OnInit, Input } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { NotificationService } from 'src/app/core/core.module';

@Component({
  selector: 'app-click-to-call',
  templateUrl: './click-to-call.component.html',
  styleUrls: ['./click-to-call.component.scss']
})
export class ClickToCallComponent implements OnInit {

  @Input() phoneNumber: string;

  constructor(
    private dialogRef: MatDialogRef<ClickToCallComponent>,
    private notificationService: NotificationService,
  ) { }

  ngOnInit() {
  }

  getPhoneNo() {
    return `tel:${this.phoneNumber}`;
  }

  copyText() {
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = this.phoneNumber;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
    this.notificationService.success('Text Copied');
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }

}
