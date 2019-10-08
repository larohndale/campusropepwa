/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DialogModalComponent } from './dialog-modal.component';

describe('DialogModalComponent', () => {
  let component: DialogModalComponent;
  let fixture: ComponentFixture<DialogModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
