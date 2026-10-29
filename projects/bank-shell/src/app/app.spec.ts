import { TestBed } from '@angular/core/testing';
import { provideRouter, Router } from '@angular/router';
import { App } from './app';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [
        provideRouter([
          { path: 'loans', children: [] },
          { path: 'insurance', children: [] },
        ]),
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should show only the menu for the active project', async () => {
    const router = TestBed.inject(Router);
    const fixture = TestBed.createComponent(App);
    await router.navigateByUrl('/loans');
    fixture.detectChanges();
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.querySelector('.brand')?.textContent).toContain('Banking Portal');
    expect(compiled.querySelectorAll('.project-nav a').length).toBe(2);
    expect(compiled.querySelector('[aria-label="Loans menu"]')?.textContent).toContain(
      'Loan applications',
    );
    expect(compiled.querySelector('[aria-label="Insurance menu"]')).toBeNull();

    await router.navigateByUrl('/insurance');
    fixture.detectChanges();
    await fixture.whenStable();

    expect(compiled.querySelector('[aria-label="Loans menu"]')).toBeNull();
    expect(compiled.querySelector('[aria-label="Insurance menu"]')?.textContent).toContain('Claims');
  });
});
