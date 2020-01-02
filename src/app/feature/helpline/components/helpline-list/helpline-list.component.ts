import { Component, OnInit, Input } from '@angular/core';
import { IHelpline } from 'src/app/core/models/helpline';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-helpline-list',
  templateUrl: './helpline-list.component.html',
  styleUrls: ['./helpline-list.component.scss']
})
export class HelplineListComponent implements OnInit {
  @Input() helplineList$: Observable<IHelpline[]>;
  @Input() showControls = false;
  constructor() {}

  ngOnInit() {}
}
