import { Component, OnInit, EventEmitter } from "@angular/core";
import { IState } from "../../core/models/state";
import { Subject, Observable, concat, of } from "rxjs";
import { ConstantsService } from "../../core/constants/constants.service";
import { Output } from "@angular/core";
import {
  debounceTime,
  distinctUntilChanged,
  tap,
  switchMap,
  catchError
} from "rxjs/operators";

@Component({
  selector: "app-searchable-state-selection",
  templateUrl: "./searchable-state-selection.component.html",
  styleUrls: ["./searchable-state-selection.component.scss"]
})
export class SearchableStateSelectionComponent implements OnInit {
  @Output() stateSelected = new EventEmitter<IState>();
  stateList$: Observable<any>;
  stateSelectionInput$ = new Subject<string>();
  selectedState: IState;
  constructor(private constantsService: ConstantsService) {}

  ngOnInit() {
    this.setupStateSearch();
    this.stateList$ = of(this.constantsService.getStates());
    this.selectedState = this.constantsService
      .getStates()
      .find(s => s.title === "National");
  }
  trackByFn(item: IState) {
    return item.code;
  }
  onSelect() {
    this.stateSelected.emit(this.selectedState);
  }
  private setupStateSearch() {
    this.stateList$ = concat(
      of([]),
      this.stateSelectionInput$.pipe(
        debounceTime(200),
        distinctUntilChanged(),
        switchMap(term =>
          this.constantsService.searchState(term).pipe(
            catchError(() => of([])) // empty list on error
          )
        )
      )
    );
  }
  cities = [
    {id: 1, name: 'Vilnius'},
    {id: 2, name: 'Kaunas'},
    {id: 3, name: 'Pavilnys', disabled: true},
    {id: 4, name: 'Pabradė'},
    {id: 5, name: 'Klaipėda'}
];
selectedCity: any;
    selectedCityIds: string[];
    selectedCityName = 'Vilnius';
    selectedCityId: number;
    selectedUserIds: number[];
}
