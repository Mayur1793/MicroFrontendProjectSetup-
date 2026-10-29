import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { LoanDashboard } from './loan-dashboard';

describe('LoanDashboard', () => {
  let component: LoanDashboard;
  let fixture: ComponentFixture<LoanDashboard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoanDashboard],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(LoanDashboard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render loan portfolio metrics and recent applications', () => {
    fixture.detectChanges();
    const element = fixture.nativeElement as HTMLElement;

    expect(element.querySelector('h1')?.textContent).toContain('Loan overview');
    expect(element.querySelectorAll('tbody tr').length).toBe(4);
    expect(element.textContent).toContain('$2.84M');
  });
});
