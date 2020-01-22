import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampusRopeISYoutubeComponent } from './campusrope-infinite-youtube.component';

describe('CampusRopeISYoutubeComponent', () => {
  let component: CampusRopeISYoutubeComponent;
  let fixture: ComponentFixture<CampusRopeISYoutubeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampusRopeISYoutubeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampusRopeISYoutubeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
