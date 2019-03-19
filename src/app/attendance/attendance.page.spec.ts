import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ATTENDANCEPage } from './attendance.page';

describe('ATTENDANCEPage', () => {
  let component: ATTENDANCEPage;
  let fixture: ComponentFixture<ATTENDANCEPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ATTENDANCEPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ATTENDANCEPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
