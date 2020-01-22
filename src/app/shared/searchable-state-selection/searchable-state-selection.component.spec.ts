import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchableStateSelectionComponent } from './searchable-state-selection.component';

describe('SearchableStateSelectionComponent', () => {
  let component: SearchableStateSelectionComponent;
  let fixture: ComponentFixture<SearchableStateSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchableStateSelectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchableStateSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
