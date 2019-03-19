import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Settings3Page } from './settings3.page';

describe('Settings3Page', () => {
  let component: Settings3Page;
  let fixture: ComponentFixture<Settings3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Settings3Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Settings3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
