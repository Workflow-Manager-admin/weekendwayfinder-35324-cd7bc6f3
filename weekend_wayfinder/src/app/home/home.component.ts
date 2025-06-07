import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
// PUBLIC_INTERFACE
export class HomeComponent {
  goToTripPlanner() {
    // Handled by router in template; implementation may be added later
  }
}
