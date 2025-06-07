import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

/*
  Expanded Mood Options:
  - Relaxing
  - Adventurous
  - Cultural
  - Romantic
  - Wellness
  - Family
  - Foodie
  - Nature
  - Luxury
*/

// Sample trip data for demonstration (simulating AI)
const SAMPLE_TRIPS = [
  // Relaxing
  {
    mood: 'Relaxing',
    maxDistance: 220,
    budget: 1200,
    destination: 'Coastal Spa Retreat',
    description: 'Unwind by the sea at a boutique spa with soothing treatments.'
  },
  {
    mood: 'Relaxing',
    maxDistance: 100,
    budget: 1000,
    destination: 'Lakeside Picnic',
    description: 'Enjoy serenity with paddleboarding, a packed lunch, and quiet trails.'
  },
  // Adventurous
  {
    mood: 'Adventurous',
    maxDistance: 300,
    budget: 1300,
    destination: 'Mountain Biking Adventure',
    description: 'Tackle rugged trails and camp beneath the stars.'
  },
  {
    mood: 'Adventurous',
    maxDistance: 80,
    budget: 1200,
    destination: 'Kayak River Quest',
    description: 'Test your skills with thrilling rapids and scenic water views.'
  },
  // Cultural
  {
    mood: 'Cultural',
    maxDistance: 120,
    budget: 1000,
    destination: 'Art & Food City Tour',
    description: 'Discover local galleries, heritage sites, and must-try food spots.'
  },
  {
    mood: 'Cultural',
    maxDistance: 70,
    budget: 1100,
    destination: 'Museum Walking Tour',
    description: 'A day visiting museums and historical exhibits with a local guide.'
  },
  // Romantic
  {
    mood: 'Romantic',
    maxDistance: 90,
    budget: 1500,
    destination: 'Winery Sunset Dinner',
    description: 'Enjoy wine tasting followed by a gourmet sunset dinner at a vineyard.'
  },
  {
    mood: 'Romantic',
    maxDistance: 50,
    budget: 1250,
    destination: 'Seaside Couples Retreat',
    description: 'A cozy weekend getaway with spa treatments and ocean views.'
  },
  // Wellness
  {
    mood: 'Wellness',
    maxDistance: 60,
    budget: 1400,
    destination: 'Mountain Yoga Escape',
    description: 'Morning yoga, healthy meals, and nature hikes for rejuvenation.'
  },
  {
    mood: 'Wellness',
    maxDistance: 40,
    budget: 1100,
    destination: 'Detox & Spa Day',
    description: 'Relax, unwind, and cleanse at a wellness spa center.'
  },
  // Family
  {
    mood: 'Family',
    maxDistance: 100,
    budget: 1200,
    destination: 'Adventure Water Park',
    description: 'Slides, pools, and activities for all ages at a family fun park.'
  },
  {
    mood: 'Family',
    maxDistance: 75,
    budget: 1300,
    destination: 'Animals & Outdoors Farm Stay',
    description: 'Children will enjoy feeding animals and playing in safe open fields.'
  },
  // Foodie
  {
    mood: 'Foodie',
    maxDistance: 45,
    budget: 1250,
    destination: 'City Street Food Crawl',
    description: 'Sample an array of international cuisines from top-rated food trucks.'
  },
  {
    mood: 'Foodie',
    maxDistance: 95,
    budget: 1350,
    destination: 'Country Gourmet Trail',
    description: 'Tour farms and local producers, taste cheeses, chocolates, and fine wines.'
  },
  // Nature
  {
    mood: 'Nature',
    maxDistance: 170,
    budget: 1000,
    destination: 'Forest Camping Adventure',
    description: 'Unplug and reconnect with nature; guided hikes and campfire meals.'
  },
  {
    mood: 'Nature',
    maxDistance: 25,
    budget: 1050,
    destination: 'Botanical Garden Explorer',
    description: 'Spend the day exploring beautifully curated local gardens.'
  },
  // Luxury
  {
    mood: 'Luxury',
    maxDistance: 320,
    budget: 1800,
    destination: 'Chic City Penthouse Weekend',
    description: 'A luxury stay with rooftop pool, fine dining, and city nightlife.'
  },
  {
    mood: 'Luxury',
    maxDistance: 200,
    budget: 2000,
    destination: 'Prestige Ski Resort',
    description: 'First-class amenities, private lessons, and a fireside suite.'
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
    { value: 'Cultural', label: 'Cultural' },
    { value: 'Romantic', label: 'Romantic' },
    { value: 'Wellness', label: 'Wellness' },
    { value: 'Family', label: 'Family' },
    { value: 'Foodie', label: 'Foodie' },
    { value: 'Nature', label: 'Nature' },
    { value: 'Luxury', label: 'Luxury' }
  ];

  constructor() {
    // Not using FormBuilder anymore to avoid lint error
    this.plannerForm = new FormGroup({
      distance: new FormBuilder().control('', [Validators.required, Validators.min(1)]),
      mood: new FormBuilder().control('', [Validators.required]),
      budget: new FormBuilder().control('', [Validators.required, Validators.min(1000)])
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
