import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

const AI_SAMPLES = [
  // Relaxing
  {
    mood: 'Relaxing',
    destination: 'Coastal Spa Resort',
    distance: 180,
    budget: 1200,
    description: 'Enjoy luxury spa treatments and tranquil sea views.'
  },
  {
    mood: 'Relaxing',
    destination: 'Lakeside Cabin Escape',
    distance: 130,
    budget: 1100,
    description: 'Disconnect in a cozy cabin by the lake, paddle or read by the water.'
  },
  {
    mood: 'Relaxing',
    destination: 'Mountain Hot Springs',
    distance: 320,
    budget: 1350,
    description: 'Relax with scenic mountain views and rejuvenating natural springs.'
  },
  {
    mood: 'Relaxing',
    destination: 'Botanical Garden Day',
    distance: 25,
    budget: 1000,
    description: 'Stroll among blooms and enjoy a tranquil lunch in a garden café.'
  },

  // Adventurous
  {
    mood: 'Adventurous',
    destination: 'Forest Zipline Park',
    distance: 70,
    budget: 1200,
    description: 'Soar over the treetops in a guided zipline experience.'
  },
  {
    mood: 'Adventurous',
    destination: 'Desert ATV Safari',
    distance: 290,
    budget: 1700,
    description: 'Hit desert trails on an all-terrain adventure with friends.'
  },
  {
    mood: 'Adventurous',
    destination: 'Mountain Biking Expedition',
    distance: 240,
    budget: 1300,
    description: 'Conquer challenging trails and camp under the stars.'
  },
  {
    mood: 'Adventurous',
    destination: 'Urban Scavenger Hunt',
    distance: 35,
    budget: 1000,
    description: 'Race to solve clues and explore the city in a unique way.'
  },

  // Cultural
  {
    mood: 'Cultural',
    destination: 'City Art Walk',
    distance: 40,
    budget: 1000,
    description: 'Join a guided walk of city galleries and story-rich murals.'
  },
  {
    mood: 'Cultural',
    destination: 'Historic Town Festival',
    distance: 80,
    budget: 1050,
    description: 'Immerse yourself in living history, food stalls, and local artisan crafts.'
  },
  {
    mood: 'Cultural',
    destination: 'Jazz and Food Night',
    distance: 60,
    budget: 1200,
    description: 'Experience live jazz and try a tasting menu at a local venue.'
  },
  {
    mood: 'Cultural',
    destination: 'Museum Hop',
    distance: 20,
    budget: 1000,
    description: 'Visit top cultural museums with a day pass and snack breaks.'
  },

  // Romantic
  {
    mood: 'Romantic',
    destination: 'Winery Sunset Dinner',
    distance: 92,
    budget: 1500,
    description: 'Wine tasting and sunset dinner at a beautiful vineyard.'
  },
  {
    mood: 'Romantic',
    destination: 'Seaside Couples Retreat',
    distance: 55,
    budget: 1250,
    description: 'A cozy weekend with spa, walks by the water, and rose petals.'
  },

  // Wellness
  {
    mood: 'Wellness',
    destination: 'Mountain Yoga Escape',
    distance: 60,
    budget: 1400,
    description: 'Morning yoga, healthy meals, and nature hikes for rejuvenation.'
  },
  {
    mood: 'Wellness',
    destination: 'Detox & Spa Day',
    distance: 40,
    budget: 1100,
    description: 'Relax, unwind, and cleanse at a wellness spa center.'
  },

  // Family
  {
    mood: 'Family',
    destination: 'Adventure Water Park',
    distance: 100,
    budget: 1200,
    description: 'Slides, pools, and fun activities for all ages at a family fun park.'
  },
  {
    mood: 'Family',
    destination: 'Animals & Outdoors Farm Stay',
    distance: 75,
    budget: 1300,
    description: 'Children enjoy playing with animals, tractor rides, and outdoor games.'
  },

  // Foodie
  {
    mood: 'Foodie',
    destination: 'City Street Food Crawl',
    distance: 45,
    budget: 1250,
    description: 'Sample international cuisines from top-rated food trucks and markets.'
  },
  {
    mood: 'Foodie',
    destination: 'Country Gourmet Trail',
    distance: 95,
    budget: 1350,
    description: 'Tour farms and producers, taste cheeses, chocolates, and fine wines.'
  },

  // Nature
  {
    mood: 'Nature',
    destination: 'Forest Camping Adventure',
    distance: 170,
    budget: 1000,
    description: 'Unplug and reconnect with nature; guided hikes and a night under the stars.'
  },
  {
    mood: 'Nature',
    destination: 'Botanical Garden Explorer',
    distance: 25,
    budget: 1050,
    description: 'A tranquil day in nature amongst blooming landscapes and rare plants.'
  },

  // Luxury
  {
    mood: 'Luxury',
    destination: 'Chic City Penthouse Weekend',
    distance: 320,
    budget: 1800,
    description: 'Five-star accommodation with rooftop pool and fine dining.'
  },
  {
    mood: 'Luxury',
    destination: 'Prestige Ski Resort',
    distance: 200,
    budget: 2000,
    description: 'First-class amenities, private ski lessons, and a fireside suite.'
  },

  // Retain a few 'budget' and other original entries, adapt so they fit the new mood scale
  {
    mood: 'Relaxing',
    destination: 'Park Picnic Retreat',
    distance: 12,
    budget: 1000,
    description: 'Pack your own snacks and enjoy open air yoga in a beautiful park.'
  },
  {
    mood: 'Adventurous',
    destination: 'Sunrise Hike & Swim',
    distance: 65,
    budget: 1050,
    description: 'Catch sunrise from a peak, then cool off with a wild lake swim.'
  },
  {
    mood: 'Cultural',
    destination: 'Local Farmers Market',
    distance: 8,
    budget: 1000,
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
