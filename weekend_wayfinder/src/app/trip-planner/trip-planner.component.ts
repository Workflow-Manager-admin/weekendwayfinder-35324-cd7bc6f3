import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

// Sample trip data for demonstration (simulating AI)
const SAMPLE_TRIPS = [
  {
    mood: 'Relaxing',
    maxDistance: 220,
    budget: 200,
    destination: 'Coastal Spa Retreat',
    description: 'Unwind by the sea at a boutique spa with soothing treatments.'
  },
  {
    mood: 'Adventurous',
    maxDistance: 300,
    budget: 180,
    destination: 'Mountain Biking Adventure',
    description: 'Tackle rugged trails and camp beneath the stars.'
  },
  {
    mood: 'Cultural',
    maxDistance: 120,
    budget: 120,
    destination: 'Art & Food City Tour',
    description: 'Discover local galleries, heritage sites, and must-try food spots.'
  },
  {
    mood: 'Relaxing',
    maxDistance: 100,
    budget: 100,
    destination: 'Lakeside Picnic',
    description: 'Enjoy serenity with paddleboarding, a packed lunch, and quiet trails.'
  },
  {
    mood: 'Adventurous',
    maxDistance: 80,
    budget: 110, // previously 90, now at least 100
    destination: 'Kayak River Quest',
    description: 'Test your skills with thrilling rapids and scenic water views.'
  },
];

// PUBLIC_INTERFACE
@Component({
  selector: 'app-trip-planner',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './trip-planner.component.html',
  styleUrl: './trip-planner.component.css'
})
// PUBLIC_INTERFACE
export class TripPlannerComponent {
  plannerForm: FormGroup;
  submitted = false;
  tripResults: typeof SAMPLE_TRIPS = [];
  suggestionsShown = false;

  moodOptions = [
    { value: '', label: 'Select mood' },
    { value: 'Relaxing', label: 'Relaxing' },
    { value: 'Adventurous', label: 'Adventurous' },
    { value: 'Cultural', label: 'Cultural' }
  ];

  constructor() {
    // Not using FormBuilder anymore to avoid lint error
    this.plannerForm = new FormGroup({
      distance: new FormBuilder().control('', [Validators.required, Validators.min(1)]),
      mood: new FormBuilder().control('', [Validators.required]),
      budget: new FormBuilder().control('', [Validators.required, Validators.min(100)])
    });

    // Listen and trigger suggestions as user types/changes form, with debounce
    this.plannerForm.valueChanges.subscribe(() => {
      if (!this.submitted) return;
      this.processFormAndUpdateTrips();
    });
  }

  // PUBLIC_INTERFACE
  onSubmit(): void {
    this.submitted = true;
    if (this.plannerForm.valid) {
      this.processFormAndUpdateTrips();
      this.suggestionsShown = true;
    } else {
      this.tripResults = [];
      this.suggestionsShown = false;
    }
  }

  // Core method to filter mock trip suggestions (AI placeholder)
  private processFormAndUpdateTrips(): void {
    const { distance, mood, budget } = this.plannerForm.value;
    if (!distance || !budget || !mood) {
      this.tripResults = [];
      this.suggestionsShown = false;
      return;
    }

    // Filter the sample "AI" trips
    this.tripResults = SAMPLE_TRIPS.filter(
      t =>
        t.mood === mood &&
        t.maxDistance <= Number(distance) + 30 && // little flexibility
        t.budget <= Number(budget) + 40           // little flexibility
    );
    this.suggestionsShown = true;
  }

  // For AI suggestions page (send state to global service later)
  // PUBLIC_INTERFACE
  getPlannerState() {
    return this.plannerForm.value;
  }
}
