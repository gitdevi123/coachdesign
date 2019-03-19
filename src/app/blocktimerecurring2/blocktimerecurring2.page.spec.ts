import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Blocktimerecurring2Page } from './blocktimerecurring2.page';

describe('Blocktimerecurring2Page', () => {
  let component: Blocktimerecurring2Page;
  let fixture: ComponentFixture<Blocktimerecurring2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Blocktimerecurring2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Blocktimerecurring2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
