import { Component } from '@angular/core';

interface ClaimRecord {
  id: string;
  claimant: string;
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
  selector: 'app-claim-list',
  styleUrl: './claim-list.css',
  templateUrl: './claim-list.html',
})
export class ClaimList {
  protected searchTerm = '';

  protected readonly claims: ClaimRecord[] = [
    { id: 'CL-3098', claimant: 'Avery Johnson', email: 'avery.johnson@example.com', initials: 'AJ', type: 'Auto', amount: '$4,850', submitted: 'Oct 24, 2026', status: 'In review', statusClass: 'review' },
    { id: 'CL-3097', claimant: 'Jordan Lee', email: 'jordan.lee@example.com', initials: 'JL', type: 'Home', amount: '$12,400', submitted: 'Oct 23, 2026', status: 'Approved', statusClass: 'approved' },
    { id: 'CL-3096', claimant: 'Taylor Morgan', email: 'taylor.morgan@example.com', initials: 'TM', type: 'Health', amount: '$2,180', submitted: 'Oct 22, 2026', status: 'More info needed', statusClass: 'attention' },
    { id: 'CL-3095', claimant: 'Riley Chen', email: 'riley.chen@example.com', initials: 'RC', type: 'Auto', amount: '$6,720', submitted: 'Oct 21, 2026', status: 'In review', statusClass: 'review' },
    { id: 'CL-3094', claimant: 'Morgan Alvarez', email: 'morgan.alvarez@example.com', initials: 'MA', type: 'Life', amount: '$25,000', submitted: 'Oct 20, 2026', status: 'Settled', statusClass: 'approved' },
    { id: 'CL-3093', claimant: 'Casey Smith', email: 'casey.smith@example.com', initials: 'CS', type: 'Home', amount: '$8,950', submitted: 'Oct 19, 2026', status: 'Declined', statusClass: 'declined' },
    { id: 'CL-3092', claimant: 'Jamie Rivera', email: 'jamie.rivera@example.com', initials: 'JR', type: 'Health', amount: '$1,640', submitted: 'Oct 18, 2026', status: 'In review', statusClass: 'review' },
  ];

  protected get filteredClaims(): ClaimRecord[] {
    const query = this.searchTerm.trim().toLowerCase();
    return this.claims.filter((claim) =>
      `${claim.id} ${claim.claimant} ${claim.type} ${claim.status}`.toLowerCase().includes(query),
    );
  }

  protected updateSearch(event: Event): void {
    if (event.target instanceof HTMLInputElement) {
      this.searchTerm = event.target.value;
    }
  }
}
