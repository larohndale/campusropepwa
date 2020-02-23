import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserZenYogaComponent } from './user-zenyoga.component';

describe('UserZenYogaComponent', () => {
  let component: UserZenYogaComponent;
  let fixture: ComponentFixture<UserZenYogaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserZenYogaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserZenYogaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
