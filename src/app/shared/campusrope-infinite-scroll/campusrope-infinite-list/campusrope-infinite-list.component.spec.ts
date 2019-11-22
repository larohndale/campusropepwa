import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampusropeInfiniteListComponent } from './campusrope-infinite-list.component';

describe('CampusropeInfiniteListComponent', () => {
  let component: CampusropeInfiniteListComponent;
  let fixture: ComponentFixture<CampusropeInfiniteListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampusropeInfiniteListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampusropeInfiniteListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
