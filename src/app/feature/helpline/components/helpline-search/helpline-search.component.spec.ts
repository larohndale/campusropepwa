import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelplineSearchComponent } from './helpline-search.component';

describe('HelplineSearchComponent', () => {
  let component: HelplineSearchComponent;
  let fixture: ComponentFixture<HelplineSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelplineSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelplineSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
