import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserHelplineComponent } from './user-helpline.component';

describe('UserHelplineComponent', () => {
  let component: UserHelplineComponent;
  let fixture: ComponentFixture<UserHelplineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserHelplineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserHelplineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
