import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlocktimePage } from './blocktime.page';

describe('BlocktimePage', () => {
  let component: BlocktimePage;
  let fixture: ComponentFixture<BlocktimePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlocktimePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlocktimePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
