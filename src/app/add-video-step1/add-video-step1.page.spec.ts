import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddVideoStep1Page } from './add-video-step1.page';

describe('AddVideoStep1Page', () => {
  let component: AddVideoStep1Page;
  let fixture: ComponentFixture<AddVideoStep1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddVideoStep1Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddVideoStep1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
