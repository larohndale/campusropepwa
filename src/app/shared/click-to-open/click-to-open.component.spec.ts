import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickToOpenComponent } from './click-to-open.component';

describe('ClickToOpenComponent', () => {
  let component: ClickToOpenComponent;
  let fixture: ComponentFixture<ClickToOpenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClickToOpenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClickToOpenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
