import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTaskAssignComponent } from './admin-task-assign.component';

describe('AdminTaskAssignComponent', () => {
  let component: AdminTaskAssignComponent;
  let fixture: ComponentFixture<AdminTaskAssignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminTaskAssignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminTaskAssignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
