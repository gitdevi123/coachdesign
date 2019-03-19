import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Blocktimerecurring1Page } from './blocktimerecurring1.page';

describe('Blocktimerecurring1Page', () => {
  let component: Blocktimerecurring1Page;
  let fixture: ComponentFixture<Blocktimerecurring1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Blocktimerecurring1Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Blocktimerecurring1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
