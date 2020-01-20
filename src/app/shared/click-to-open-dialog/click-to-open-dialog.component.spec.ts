import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickToOpenDialogComponent } from './click-to-open-dialog.component';

describe('ClickToOpenDialogComponent', () => {
  let component: ClickToOpenDialogComponent;
  let fixture: ComponentFixture<ClickToOpenDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClickToOpenDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClickToOpenDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
