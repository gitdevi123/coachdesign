import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Settings1Page } from './settings1.page';

describe('Settings1Page', () => {
  let component: Settings1Page;
  let fixture: ComponentFixture<Settings1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Settings1Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Settings1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
