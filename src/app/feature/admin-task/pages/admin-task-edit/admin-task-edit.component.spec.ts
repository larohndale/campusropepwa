import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTaskEditComponent } from './admin-task-edit.component';

describe('AdminTaskEditComponent', () => {
  let component: AdminTaskEditComponent;
  let fixture: ComponentFixture<AdminTaskEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminTaskEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminTaskEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
