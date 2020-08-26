import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HumanoterapiaComponent } from './humanoterapia.component';

describe('HumanoterapiaComponent', () => {
  let component: HumanoterapiaComponent;
  let fixture: ComponentFixture<HumanoterapiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HumanoterapiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HumanoterapiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
