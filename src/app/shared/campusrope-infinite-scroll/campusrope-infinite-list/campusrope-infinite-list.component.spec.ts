import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampusRopeISListComponent } from './campusrope-infinite-list.component';

describe('CampusRopeISListComponent', () => {
  let component: CampusRopeISListComponent;
  let fixture: ComponentFixture<CampusRopeISListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampusRopeISListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampusRopeISListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
