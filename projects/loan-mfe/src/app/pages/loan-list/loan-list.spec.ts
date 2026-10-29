import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoanList } from './loan-list';

describe('LoanList', () => {
  let component: LoanList;
  let fixture: ComponentFixture<LoanList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoanList],
    }).compileComponents();

    fixture = TestBed.createComponent(LoanList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show sample applications and filter by search term', () => {
    fixture.detectChanges();
    const element = fixture.nativeElement as HTMLElement;
    const search = element.querySelector('input')!;

    expect(element.querySelectorAll('tbody tr').length).toBe(7);
    search.value = 'Olivia';
    search.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    expect(element.querySelectorAll('tbody tr').length).toBe(1);
    expect(element.textContent).toContain('Olivia Rhye');
  });
});
