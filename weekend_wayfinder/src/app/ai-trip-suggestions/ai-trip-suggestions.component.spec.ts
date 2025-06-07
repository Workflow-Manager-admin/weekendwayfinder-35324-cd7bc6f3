import { TestBed } from '@angular/core/testing';
import { AiTripSuggestionsComponent } from './ai-trip-suggestions.component';
import { CommonModule } from '@angular/common';

describe('AiTripSuggestionsComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AiTripSuggestionsComponent, CommonModule],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(AiTripSuggestionsComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
