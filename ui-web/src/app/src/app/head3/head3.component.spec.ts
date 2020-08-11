import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Head3Component } from './head3.component';

describe('Head3Component', () => {
  let component: Head3Component;
  let fixture: ComponentFixture<Head3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Head3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Head3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
