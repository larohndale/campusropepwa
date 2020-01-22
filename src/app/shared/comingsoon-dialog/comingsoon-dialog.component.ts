import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Observable } from 'rxjs';
import { LayoutService } from 'src/app/core/services/layout.service';
import { ModalDialogService } from 'src/app/core/services/modal-dialog.service';

@Component({
  selector: 'app-comingsoon-dialog',
  templateUrl: './comingsoon-dialog.component.html',
  styleUrls: ['./comingsoon-dialog.component.scss']
})
export class ComingsoonDialogComponent implements OnInit {
  isMobile$: Observable<boolean>;

  constructor(
    private layoutService: LayoutService,
    private dialogService: ModalDialogService,
    @Inject(MAT_DIALOG_DATA) public dialogData: any
  ) {}

  ngOnInit() {
    this.isMobile$ = this.layoutService.isMobile$;
  }

  onCancelClick(): void {
    this.dialogService.close();
  }
}
