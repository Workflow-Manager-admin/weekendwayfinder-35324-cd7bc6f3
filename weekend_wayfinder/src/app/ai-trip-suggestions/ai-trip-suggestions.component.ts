import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

const AI_SAMPLES = [
  {
    mood: 'Relaxing',
    destination: 'Coastal Spa Resort',
    distance: 180,
    budget: 220,
    description: 'Enjoy luxury spa treatments and tranquil sea views.'
  },
  {
    mood: 'Adventurous',
    destination: 'Forest Zipline Park',
    distance: 70,
    budget: 100,
    description: 'Soar over the treetops in a guided zipline experience.'
  },
  {
    mood: 'Cultural',
    destination: 'City Art Walk',
    distance: 40,
    budget: 50,
    description: 'Join a guided walk of city galleries and story-rich murals.'
  }
];

// PUBLIC_INTERFACE
@Component({
  selector: 'app-ai-trip-suggestions',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ai-trip-suggestions.component.html',
  styleUrl: './ai-trip-suggestions.component.css'
})
// PUBLIC_INTERFACE
export class AiTripSuggestionsComponent implements OnInit {
  // For future integration: accept live state from trip planner
  @Input() preferences?: { mood?: string; distance?: number; budget?: number };
  displayed: typeof AI_SAMPLES = [];

  // Simulate real-time logic
  ngOnInit(): void {
    this.displayed = AI_SAMPLES;
  }

  // PUBLIC_INTERFACE
  updateSuggestions(preferences: { mood?: string; distance?: number; budget?: number }) {
    // In real code: connect service, trigger backend, etc.
    this.displayed =
      AI_SAMPLES.filter(
        (a) =>
          (!preferences.mood || a.mood === preferences.mood) &&
          (!preferences.distance || a.distance <= preferences.distance + 40) &&
          (!preferences.budget || a.budget <= preferences.budget + 60)
      );
  }
}
