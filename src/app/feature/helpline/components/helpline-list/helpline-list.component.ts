import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { IHelpline } from 'src/app/core/models/helpline';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-helpline-list',
  templateUrl: './helpline-list.component.html',
  styleUrls: ['./helpline-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HelplineListComponent implements OnInit {
  @Input() helplineList$: Observable<IHelpline[]>;

  constructor(
  ) {}

  ngOnInit() {}
}
