import { Component, OnInit, Input } from '@angular/core';
import { Helpline } from 'src/app/core/models/helpline';

@Component({
  selector: 'app-helpline-list',
  templateUrl: './helpline-list.component.html',
  styleUrls: ['./helpline-list.component.scss']
})
export class HelplineListComponent implements OnInit {

  @Input() helplineList: Helpline[] ;

  constructor() { }

  ngOnInit() {
  }

}
