import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAccComponent } from './new-acc.component';

describe('NewAccComponent', () => {
  let component: NewAccComponent;
  let fixture: ComponentFixture<NewAccComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewAccComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewAccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
