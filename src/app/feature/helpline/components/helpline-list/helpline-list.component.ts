import { Component, OnInit, Input } from '@angular/core';
import { IHelpline } from 'src/app/core/models/helpline';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material';
import { ClickToCallComponent } from 'src/app/shared/click-to-call/click-to-call.component';

@Component({
  selector: 'app-helpline-list',
  templateUrl: './helpline-list.component.html',
  styleUrls: ['./helpline-list.component.scss']
})
export class HelplineListComponent implements OnInit {
  @Input() helplineList$: Observable<IHelpline[]>;

  constructor(
    private dialog: MatDialog
  ) {}

  ngOnInit() {}

  openDialog() {
    this.dialog.open(ClickToCallComponent, {
      width: '350px'
    });
  }
}
