import { Component, OnInit, Input } from '@angular/core';
import { IHelpline } from 'src/app/core/models/helpline';
import { Subject, concat, of, Observable } from 'rxjs';
import { HelplineService } from '../../services/helpline.service';
import {
  debounceTime,
  distinctUntilChanged,
  tap,
  switchMap,
  catchError
} from 'rxjs/operators';

@Component({
  selector: 'app-helpline-search',
  templateUrl: './helpline-search.component.html',
  styleUrls: ['./helpline-search.component.scss']
})
export class HelplineSearchComponent implements OnInit {
  helplineList$: Observable<any>;
  helplineLoading = false;
  helplineInput$ = new Subject<string>();
  selectedHelpline: IHelpline;

  constructor(private helplineService: HelplineService) {}

  ngOnInit() {
    this.setupHelplineSearch();
  }

  trackByFn(item: IHelpline) {
    return item._id;
  }

  private setupHelplineSearch() {
    this.helplineList$ = concat(
      of([]), // default items
      this.helplineInput$.pipe(
        debounceTime(200),
        distinctUntilChanged(),
        tap(() => (this.helplineLoading = true)),
        switchMap(term =>
          this.helplineService.searchHelpline(term).pipe(
            catchError(() => of([])), // empty list on error
            tap(() => (this.helplineLoading = false))
          )
        )
      )
    );
  }
}
