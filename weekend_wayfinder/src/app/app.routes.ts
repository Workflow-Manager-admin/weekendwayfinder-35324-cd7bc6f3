import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'sign-in',
    loadComponent: () => import('./sign-in/sign-in.component').then(m => m.SignInComponent),
  },
  {
    path: 'home',
    loadComponent: () => import('./home/home.component').then(m => m.HomeComponent),
  },
  {
    path: 'trip-planner',
    loadComponent: () => import('./trip-planner/trip-planner.component').then(m => m.TripPlannerComponent),
  },
  {
    path: 'ai-trip-suggestions',
    loadComponent: () => import('./ai-trip-suggestions/ai-trip-suggestions.component').then(m => m.AiTripSuggestionsComponent),
  },
  { path: '**', redirectTo: 'home' }
];
