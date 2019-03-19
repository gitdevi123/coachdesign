import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Blocktime2Page } from './blocktime2.page';

describe('Blocktime2Page', () => {
  let component: Blocktime2Page;
  let fixture: ComponentFixture<Blocktime2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Blocktime2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Blocktime2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
