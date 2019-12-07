import { Component, OnInit, Input } from "@angular/core";
import { ModalDialogService } from "src/app/core/services/modal-dialog.service";
import { ClickToOpenDialogComponent } from "../click-to-open-dialog/click-to-open-dialog.component";

@Component({
  selector: "app-click-to-open",
  templateUrl: "./click-to-open.component.html",
  styleUrls: ["./click-to-open.component.scss"]
})
export class ClickToOpenComponent implements OnInit {
  @Input() url: string;

  constructor(private dialogService: ModalDialogService) {}

  ngOnInit() {}

  openClickToOpenDialog() {
    if (!this.url) {
      return;
    }
    this.dialogService.open(ClickToOpenDialogComponent, {
      data: {
        url: this.url
      }
    });
  }
}
