import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTrendingComponent } from './admin-trending.component';

describe('AdminTrendingComponent', () => {
  let component: AdminTrendingComponent;
  let fixture: ComponentFixture<AdminTrendingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminTrendingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminTrendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
