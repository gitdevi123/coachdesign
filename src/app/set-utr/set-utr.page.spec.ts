import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetUTRPage } from './set-utr.page';

describe('SetUTRPage', () => {
  let component: SetUTRPage;
  let fixture: ComponentFixture<SetUTRPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetUTRPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetUTRPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
