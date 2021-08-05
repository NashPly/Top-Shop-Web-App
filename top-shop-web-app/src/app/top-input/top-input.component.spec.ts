import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopInputComponent } from './top-input.component';

describe('TopInputComponent', () => {
  let component: TopInputComponent;
  let fixture: ComponentFixture<TopInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
