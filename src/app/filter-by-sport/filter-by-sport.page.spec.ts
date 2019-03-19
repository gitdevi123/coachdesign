import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterBySportPage } from './filter-by-sport.page';

describe('FilterBySportPage', () => {
  let component: FilterBySportPage;
  let fixture: ComponentFixture<FilterBySportPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterBySportPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterBySportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
