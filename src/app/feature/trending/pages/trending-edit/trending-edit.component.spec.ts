import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingEditComponent } from './trending-edit.component';

describe('TrendingEditComponent', () => {
  let component: TrendingEditComponent;
  let fixture: ComponentFixture<TrendingEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrendingEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrendingEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
