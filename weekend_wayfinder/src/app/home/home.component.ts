import { Component } from '@angular/core';

// PUBLIC_INTERFACE
@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
// PUBLIC_INTERFACE
export class HomeComponent {
  // For navigation, router would be injected here if needed; currently not used per linting
  goToTripPlanner(): void {
    // Navigation handled by routerLink or can be re-enabled as needed
  }
}
