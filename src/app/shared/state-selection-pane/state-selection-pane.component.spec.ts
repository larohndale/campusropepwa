/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { StateSelectionPaneComponent } from './state-selection-pane.component';

describe('StateSelectionPaneComponent', () => {
  let component: StateSelectionPaneComponent;
  let fixture: ComponentFixture<StateSelectionPaneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StateSelectionPaneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StateSelectionPaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
