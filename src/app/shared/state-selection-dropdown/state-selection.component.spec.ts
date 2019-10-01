import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StateSelectionComponent } from './state-selection.component';

describe('StateSelectionComponent', () => {
  let component: StateSelectionComponent;
  let fixture: ComponentFixture<StateSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StateSelectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StateSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
