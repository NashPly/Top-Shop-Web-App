import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderInfoEntryComponent } from './order-info-entry.component';

describe('OrderInfoEntryComponent', () => {
  let component: OrderInfoEntryComponent;
  let fixture: ComponentFixture<OrderInfoEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderInfoEntryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderInfoEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
