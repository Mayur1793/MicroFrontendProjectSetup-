import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClaimList } from './claim-list';

describe('ClaimList', () => {
  let component: ClaimList;
  let fixture: ComponentFixture<ClaimList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClaimList],
    }).compileComponents();

    fixture = TestBed.createComponent(ClaimList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show sample claims and filter by search term', () => {
    fixture.detectChanges();
    const element = fixture.nativeElement as HTMLElement;
    const search = element.querySelector('input')!;

    expect(element.querySelectorAll('tbody tr').length).toBe(7);
    search.value = 'Avery';
    search.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    expect(element.querySelectorAll('tbody tr').length).toBe(1);
    expect(element.textContent).toContain('Avery Johnson');
  });
});
