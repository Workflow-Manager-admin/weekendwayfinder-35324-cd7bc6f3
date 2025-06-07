import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { Component } from '@angular/core';

// Dummy router outlet to check for existence, as Angular's RouterOutlet is a directive
@Component({ selector: 'router-outlet', template: '' })
class MockRouterOutlet {}

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      // Use actual NavbarComponent (standalone component) and a dummy router-outlet
      imports: [AppComponent, NavbarComponent],
      declarations: [MockRouterOutlet],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render the navbar', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    // Navbar is present if <app-navbar> exists
    expect(compiled.querySelector('app-navbar')).toBeTruthy();
  });

  it('should render the router outlet', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    // custom mock router-outlet for test detection; selector is 'router-outlet'
    expect(compiled.querySelector('router-outlet')).toBeTruthy();
  });
});
