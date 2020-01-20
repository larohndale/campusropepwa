import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelplineListComponent } from './helpline-list.component';

describe('HelplineListComponent', () => {
  let component: HelplineListComponent;
  let fixture: ComponentFixture<HelplineListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelplineListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelplineListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
