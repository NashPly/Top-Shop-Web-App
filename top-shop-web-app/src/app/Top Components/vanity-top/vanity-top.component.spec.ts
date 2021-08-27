import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VanityTopComponent } from './vanity-top.component';

describe('VanityTopComponent', () => {
  let component: VanityTopComponent;
  let fixture: ComponentFixture<VanityTopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VanityTopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VanityTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
