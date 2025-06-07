import { TestBed } from '@angular/core/testing';
import { SignInComponent } from './sign-in.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

describe('SignInComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignInComponent, ReactiveFormsModule, CommonModule],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(SignInComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
