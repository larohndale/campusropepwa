import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZenYogaListComponent } from './zenyoga-list.component';

describe('ZenYogaListComponent', () => {
  let component: ZenYogaListComponent;
  let fixture: ComponentFixture<ZenYogaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZenYogaListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZenYogaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
