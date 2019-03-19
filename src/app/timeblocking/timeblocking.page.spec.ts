import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeblockingPage } from './timeblocking.page';

describe('TimeblockingPage', () => {
  let component: TimeblockingPage;
  let fixture: ComponentFixture<TimeblockingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeblockingPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeblockingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
