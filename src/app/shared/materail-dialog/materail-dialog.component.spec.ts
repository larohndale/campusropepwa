import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterailDialogComponent } from './materail-dialog.component';

describe('MaterailDialogComponent', () => {
  let component: MaterailDialogComponent;
  let fixture: ComponentFixture<MaterailDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterailDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterailDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
