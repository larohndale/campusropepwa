import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminHelplineComponent } from './admin-helpline.component';

describe('AdminHelplineComponent', () => {
  let component: AdminHelplineComponent;
  let fixture: ComponentFixture<AdminHelplineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminHelplineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminHelplineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
