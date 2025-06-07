import { TestBed } from '@angular/core/testing';
import { NavbarComponent } from './navbar.component';
import { RouterLink, RouterLinkActive } from '@angular/router';

describe('NavbarComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarComponent, RouterLink, RouterLinkActive],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(NavbarComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
