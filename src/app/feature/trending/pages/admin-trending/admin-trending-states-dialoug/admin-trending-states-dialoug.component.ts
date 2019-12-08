import { Component, OnInit, Inject } from '@angular/core';

import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
    selector: 'admin-trending-states-dialoug',
    templateUrl: 'admin-trending-states-dialoug.html',
    styleUrls: ['./admin-trending-states-dialoug.scss']
})
export class AdminTrendingStatesDialoug {

    constructor(
        public dialogRef: MatDialogRef<AdminTrendingStatesDialoug>,
        @Inject(MAT_DIALOG_DATA) public data: any) { }

    states = this.data

    selectState(selectedState): void {
        console.log("TCL: AdminTrendingStatesDialoug -> @Inject -> selectedState", selectedState)
        this.dialogRef.close();
    }

}