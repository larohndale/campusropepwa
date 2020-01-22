import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelplineFormComponent } from './helpline-form.component';

describe('HelplineFormComponent', () => {
  let component: HelplineFormComponent;
  let fixture: ComponentFixture<HelplineFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelplineFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelplineFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
