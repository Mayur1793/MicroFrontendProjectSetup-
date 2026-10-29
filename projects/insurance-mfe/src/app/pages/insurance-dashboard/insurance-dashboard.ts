import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Claim {
  claimant: string;
  initials: string;
  type: string;
  amount: string;
  status: string;
  statusClass: string;
}

@Component({
  imports: [RouterLink],
  selector: 'app-insurance-dashboard',
  styleUrl: './insurance-dashboard.css',
  templateUrl: './insurance-dashboard.html',
})
export class InsuranceDashboard {
  protected readonly monthlyClaims = [
    { month: 'May', value: 36, height: '42%' },
    { month: 'Jun', value: 51, height: '58%' },
    { month: 'Jul', value: 45, height: '51%' },
    { month: 'Aug', value: 63, height: '72%' },
    { month: 'Sep', value: 58, height: '66%' },
    { month: 'Oct', value: 78, height: '89%' },
  ];

  protected readonly recentClaims: Claim[] = [
    { claimant: 'Avery Johnson', initials: 'AJ', type: 'Auto', amount: '$4,850', status: 'In review', statusClass: 'review' },
    { claimant: 'Jordan Lee', initials: 'JL', type: 'Home', amount: '$12,400', status: 'Approved', statusClass: 'approved' },
    { claimant: 'Taylor Morgan', initials: 'TM', type: 'Health', amount: '$2,180', status: 'More info needed', statusClass: 'attention' },
    { claimant: 'Riley Chen', initials: 'RC', type: 'Auto', amount: '$6,720', status: 'In review', statusClass: 'review' },
  ];
}
