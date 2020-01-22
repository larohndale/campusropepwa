import { Component, OnInit, Input } from "@angular/core";
import { ClickToCallDialogComponent } from "../click-to-call-dialog/click-to-call-dialog.component";
import { ModalDialogService } from "src/app/core/services/modal-dialog.service";

@Component({
  selector: "app-click-to-call",
  templateUrl: "./click-to-call.component.html",
  styleUrls: ["./click-to-call.component.scss"]
})
export class ClickToCallComponent implements OnInit {
  @Input() phoneNumber: string;

  constructor(private dialogService: ModalDialogService) {}

  ngOnInit() {}

  openClickToCallDialog() {
    if (!this.phoneNumber) {
      return;
    }
    this.dialogService.open(ClickToCallDialogComponent, {
      data: {
        phoneNumber: this.phoneNumber
      }
    });
  }
}
