import { Component, OnInit, Inject } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material";
import { ModalDialogService } from "src/app/core/services/modal-dialog.service";

@Component({
  selector: "app-click-to-open-dialog",
  templateUrl: "./click-to-open-dialog.component.html",
  styleUrls: ["./click-to-open-dialog.component.scss"]
})
export class ClickToOpenDialogComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public dialogData: any,
    private dialogService: ModalDialogService
  ) {}

  ngOnInit() {}

  copyLink() {}

  openURL() {}

  closeDialog() {
    this.dialogService.close();
  }
}
