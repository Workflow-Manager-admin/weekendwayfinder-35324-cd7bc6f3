import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

const AI_SAMPLES = [
  // Relaxing
  {
    mood: 'Relaxing',
    destination: 'Coastal Spa Resort',
    distance: 180,
    budget: 220,
    description: 'Enjoy luxury spa treatments and tranquil sea views.'
  },
  {
    mood: 'Relaxing',
    destination: 'Lakeside Cabin Escape',
    distance: 130,
    budget: 170,
    description: 'Disconnect in a cozy cabin by the lake, paddle or read by the water.'
  },
  {
    mood: 'Relaxing',
    destination: 'Mountain Hot Springs',
    distance: 320,
    budget: 260,
    description: 'Relax with scenic mountain views and rejuvenating natural springs.'
  },
  {
    mood: 'Relaxing',
    destination: 'Botanical Garden Day',
    distance: 25,
    budget: 45,
    description: 'Stroll among blooms and enjoy a tranquil lunch in a garden café.'
  },

  // Adventurous
  {
    mood: 'Adventurous',
    destination: 'Forest Zipline Park',
    distance: 70,
    budget: 100,
    description: 'Soar over the treetops in a guided zipline experience.'
  },
  {
    mood: 'Adventurous',
    destination: 'Desert ATV Safari',
    distance: 290,
    budget: 185,
    description: 'Hit desert trails on an all-terrain adventure with friends.'
  },
  {
    mood: 'Adventurous',
    destination: 'Mountain Biking Expedition',
    distance: 240,
    budget: 160,
    description: 'Conquer challenging trails and camp under the stars.'
  },
  {
    mood: 'Adventurous',
    destination: 'Urban Scavenger Hunt',
    distance: 35,
    budget: 25,
    description: 'Race to solve clues and explore the city in a unique way.'
  },

  // Cultural
  {
    mood: 'Cultural',
    destination: 'City Art Walk',
    distance: 40,
    budget: 50,
    description: 'Join a guided walk of city galleries and story-rich murals.'
  },
  {
    mood: 'Cultural',
    destination: 'Historic Town Festival',
    distance: 80,
    budget: 90,
    description: 'Immerse yourself in living history, food stalls, and local artisan crafts.'
  },
  {
    mood: 'Cultural',
    destination: 'Jazz and Food Night',
    distance: 60,
    budget: 110,
    description: 'Experience live jazz and try a tasting menu at a local venue.'
  },
  {
    mood: 'Cultural',
    destination: 'Museum Hop',
    distance: 20,
    budget: 25,
    description: 'Visit top cultural museums with a day pass and snack breaks.'
  },

  // Budget
  {
    mood: 'Relaxing',
    destination: 'Park Picnic Retreat',
    distance: 12,
    budget: 15,
    description: 'Pack your own snacks and enjoy open air yoga in a beautiful park.'
  },
  {
    mood: 'Adventurous',
    destination: 'Sunrise Hike & Swim',
    distance: 65,
    budget: 35,
    description: 'Catch sunrise from a peak, then cool off with a wild lake swim.'
  },
  {
    mood: 'Cultural',
    destination: 'Local Farmers Market',
    distance: 8,
    budget: 12,
    description: 'Sample fresh produce and handcrafts while supporting local growers.'
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
