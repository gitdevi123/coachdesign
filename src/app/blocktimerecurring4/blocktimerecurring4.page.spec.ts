import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Blocktimerecurring4Page } from './blocktimerecurring4.page';

describe('Blocktimerecurring4Page', () => {
  let component: Blocktimerecurring4Page;
  let fixture: ComponentFixture<Blocktimerecurring4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Blocktimerecurring4Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Blocktimerecurring4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
