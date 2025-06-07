import { TestBed } from '@angular/core/testing';
import { TripPlannerComponent } from './trip-planner.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

describe('TripPlannerComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TripPlannerComponent, ReactiveFormsModule, CommonModule],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(TripPlannerComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
