import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeasurementEntryComponent } from './measurement-entry.component';

describe('MeasurementEntryComponent', () => {
  let component: MeasurementEntryComponent;
  let fixture: ComponentFixture<MeasurementEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeasurementEntryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeasurementEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
