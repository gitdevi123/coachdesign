import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SCHEDULEPage } from './schedule.page';

describe('SCHEDULEPage', () => {
  let component: SCHEDULEPage;
  let fixture: ComponentFixture<SCHEDULEPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SCHEDULEPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SCHEDULEPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
