import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockdatePage } from './blockdate.page';

describe('BlockdatePage', () => {
  let component: BlockdatePage;
  let fixture: ComponentFixture<BlockdatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlockdatePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockdatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
