import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCVPage } from './edit-cv.page';

describe('EditCVPage', () => {
  let component: EditCVPage;
  let fixture: ComponentFixture<EditCVPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditCVPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCVPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
