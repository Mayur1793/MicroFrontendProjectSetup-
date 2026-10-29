import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { InsuranceDashboard } from './insurance-dashboard';

describe('InsuranceDashboard', () => {
  let component: InsuranceDashboard;
  let fixture: ComponentFixture<InsuranceDashboard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InsuranceDashboard],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(InsuranceDashboard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render insurance metrics and recent claims', () => {
    fixture.detectChanges();
    const element = fixture.nativeElement as HTMLElement;

    expect(element.querySelector('h1')?.textContent).toContain('Insurance overview');
    expect(element.querySelectorAll('tbody tr').length).toBe(4);
    expect(element.textContent).toContain('$486.2K');
  });
});
