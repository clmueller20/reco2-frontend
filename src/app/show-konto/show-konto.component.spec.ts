import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowKontoComponent } from './show-konto.component';

describe('ShowKontoComponent', () => {
  let component: ShowKontoComponent;
  let fixture: ComponentFixture<ShowKontoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowKontoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowKontoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
