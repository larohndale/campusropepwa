import { Component, OnInit, Input, ViewEncapsulation } from "@angular/core";
import { IHelpline } from "src/app/core/models/helpline";
import { Observable } from "rxjs";
import { DialogModalComponent } from "../../../../shared/dialog-modal/dialog-modal.component";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA
} from "@angular/material/dialog";

@Component({
  selector: "app-helpline-list",
  templateUrl: "./helpline-list.component.html",
  styleUrls: ["./helpline-list.component.scss"]
})
export class HelplineListComponent implements OnInit {
  @Input() helplineList$: Observable<IHelpline[]>;
  constructor(public dialog: MatDialog) {}

  ngOnInit() {}

  goToLink(type: string, url: string) {
    const dialogRef = this.dialog.open(DialogModalComponent, {
      width: "200px",
      data: { textType: type, value: url }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log("The dialog was closed");
    });
    // window.open(url, '_blank');
  }
}
