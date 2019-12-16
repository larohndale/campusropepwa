import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-client-dialog',
  templateUrl: './add-client-dialog.component.html',
  styleUrls: ['./add-client-dialog.component.scss']
})
export class AddClientDialog {

  constructor(
    public dialogRef: MatDialogRef<AddClientDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  select(selectedClient): void {
    this.dialogRef.close(selectedClient);
  }

  onNoClick() {
    this.dialogRef.close()
  }

}
