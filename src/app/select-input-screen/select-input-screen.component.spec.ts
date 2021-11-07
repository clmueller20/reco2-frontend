import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectInputScreenComponent } from './select-input-screen.component';

describe('SelectInputScreenComponent', () => {
  let component: SelectInputScreenComponent;
  let fixture: ComponentFixture<SelectInputScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectInputScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectInputScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
