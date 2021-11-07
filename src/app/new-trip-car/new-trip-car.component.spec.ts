import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTripCarComponent } from './new-trip-car.component';

describe('NewTripCarComponent', () => {
  let component: NewTripCarComponent;
  let fixture: ComponentFixture<NewTripCarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewTripCarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewTripCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
