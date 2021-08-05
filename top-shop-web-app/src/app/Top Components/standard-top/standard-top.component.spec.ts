import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandardTopComponent } from './standard-top.component';

describe('StandardTopComponent', () => {
  let component: StandardTopComponent;
  let fixture: ComponentFixture<StandardTopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StandardTopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StandardTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
