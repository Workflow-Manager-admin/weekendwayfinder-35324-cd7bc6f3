import { Component } from '@angular/core';
import { Router } from '@angular/router';

// PUBLIC_INTERFACE
@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
// PUBLIC_INTERFACE
export class HomeComponent {
  // eslint-disable-next-line no-unused-vars
  constructor(private router: Router) {}

  // PUBLIC_INTERFACE
  goToTripPlanner(): void {
    // Properly navigate to trip planner
    this.router.navigate(['/trip-planner']);
  }
}
