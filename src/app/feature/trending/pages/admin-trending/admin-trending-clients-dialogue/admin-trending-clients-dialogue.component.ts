import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-admin-trending-clients-dialogue',
  templateUrl: './admin-trending-clients-dialogue.component.html',
  styleUrls: ['./admin-trending-clients-dialogue.component.scss']
})
export class AdminTrendingClientsDialogue {

  constructor(
    public dialogRef: MatDialogRef<AdminTrendingClientsDialogue>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  clients = this.data

  select(selectedClient): void {
    this.dialogRef.close(selectedClient);
  }

}
