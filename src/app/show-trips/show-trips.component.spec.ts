import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowTripsComponent } from './show-trips.component';

describe('ShowTripsComponent', () => {
  let component: ShowTripsComponent;
  let fixture: ComponentFixture<ShowTripsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowTripsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowTripsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
