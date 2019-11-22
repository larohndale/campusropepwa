import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampusropeInfiniteYoutubeComponent } from './campusrope-infinite-youtube.component';

describe('CampusropeInfiniteYoutubeComponent', () => {
  let component: CampusropeInfiniteYoutubeComponent;
  let fixture: ComponentFixture<CampusropeInfiniteYoutubeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampusropeInfiniteYoutubeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampusropeInfiniteYoutubeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
