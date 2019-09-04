import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTrendingComponent } from './user-trending.component';

describe('UserTrendingComponent', () => {
  let component: UserTrendingComponent;
  let fixture: ComponentFixture<UserTrendingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserTrendingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserTrendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
