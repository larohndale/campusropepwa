import { Component, OnInit, Inject } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { Observable } from "rxjs";
import { LayoutService } from "src/app/core/services/layout.service";
import { ModalDialogService } from "src/app/core/services/modal-dialog.service";

@Component({
  selector: "app-click-to-call-dialog",
  templateUrl: "./click-to-call-dialog.component.html",
  styleUrls: ["./click-to-call-dialog.component.scss"]
})
export class ClickToCallDialogComponent implements OnInit {
  isMobile$: Observable<boolean>;

  constructor(
    private layoutService: LayoutService,
    private dialogService: ModalDialogService,
    @Inject(MAT_DIALOG_DATA) public dialogData: any
  ) {}

  ngOnInit() {
    this.isMobile$ = this.layoutService.isMobile$;
  }

  getPhoneNo() {
    return `tel:${this.dialogData.phoneNumber}`;
  }

  copyText() {
    const selBox = document.createElement("textarea");
    selBox.style.position = "fixed";
    selBox.style.left = "0";
    selBox.style.top = "0";
    selBox.style.opacity = "0";
    selBox.value = this.dialogData.phoneNumber;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand("copy");
    document.body.removeChild(selBox);
  }

  onCancelClick(): void {
    this.dialogService.close();
  }
}
