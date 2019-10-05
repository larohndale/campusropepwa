import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dialog-modal',
  templateUrl: './dialog-modal.component.html',
  styleUrls: ['./dialog-modal.component.scss']
})
export class DialogModalComponent implements OnInit {

  @Input() url: string;

  constructor() { }

  ngOnInit() {
  }

}
