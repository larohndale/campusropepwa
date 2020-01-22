import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingAddComponent } from './trending-add.component';

describe('TrendingAddComponent', () => {
  let component: TrendingAddComponent;
  let fixture: ComponentFixture<TrendingAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrendingAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrendingAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
