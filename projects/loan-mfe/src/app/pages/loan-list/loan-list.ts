import { Component } from '@angular/core';

interface LoanRecord {
  id: string;
  applicant: string;
  email: string;
  initials: string;
  type: string;
  amount: string;
  submitted: string;
  status: string;
  statusClass: string;
}

@Component({
  imports: [],
  selector: 'app-loan-list',
  styleUrl: './loan-list.css',
  templateUrl: './loan-list.html',
})
export class LoanList {
  protected searchTerm = '';

  protected readonly applications: LoanRecord[] = [
    { id: 'LN-2048', applicant: 'Olivia Rhye', email: 'olivia.rhye@example.com', initials: 'OR', type: 'Home loan', amount: '$320,000', submitted: 'Oct 24, 2026', status: 'Under review', statusClass: 'review' },
    { id: 'LN-2047', applicant: 'Phoenix Baker', email: 'phoenix.baker@example.com', initials: 'PB', type: 'Personal loan', amount: '$18,500', submitted: 'Oct 23, 2026', status: 'Approved', statusClass: 'approved' },
    { id: 'LN-2046', applicant: 'Lana Steiner', email: 'lana.steiner@example.com', initials: 'LS', type: 'Auto loan', amount: '$42,800', submitted: 'Oct 22, 2026', status: 'Documents needed', statusClass: 'attention' },
    { id: 'LN-2045', applicant: 'Demi Wilkinson', email: 'demi.wilkinson@example.com', initials: 'DW', type: 'Home loan', amount: '$265,000', submitted: 'Oct 21, 2026', status: 'In assessment', statusClass: 'review' },
    { id: 'LN-2044', applicant: 'Candice Wu', email: 'candice.wu@example.com', initials: 'CW', type: 'Business loan', amount: '$125,000', submitted: 'Oct 20, 2026', status: 'Approved', statusClass: 'approved' },
    { id: 'LN-2043', applicant: 'Natali Craig', email: 'natali.craig@example.com', initials: 'NC', type: 'Personal loan', amount: '$12,000', submitted: 'Oct 19, 2026', status: 'Declined', statusClass: 'declined' },
    { id: 'LN-2042', applicant: 'Drew Cano', email: 'drew.cano@example.com', initials: 'DC', type: 'Auto loan', amount: '$31,400', submitted: 'Oct 18, 2026', status: 'Under review', statusClass: 'review' },
  ];

  protected get filteredApplications(): LoanRecord[] {
    const query = this.searchTerm.trim().toLowerCase();
    return this.applications.filter((application) =>
      `${application.id} ${application.applicant} ${application.type} ${application.status}`
        .toLowerCase()
        .includes(query),
    );
  }

  protected updateSearch(event: Event): void {
    if (event.target instanceof HTMLInputElement) {
      this.searchTerm = event.target.value;
    }
  }
}
