import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface LoanApplication {
  applicant: string;
  initials: string;
  type: string;
  amount: string;
  status: string;
  statusClass: string;
}

@Component({
  imports: [RouterLink],
  selector: 'app-loan-dashboard',
  styleUrl: './loan-dashboard.css',
  templateUrl: './loan-dashboard.html',
})
export class LoanDashboard {
  protected readonly monthlyApplications = [
    { month: 'May', value: 48, height: '48%' },
    { month: 'Jun', value: 62, height: '62%' },
    { month: 'Jul', value: 55, height: '55%' },
    { month: 'Aug', value: 74, height: '74%' },
    { month: 'Sep', value: 68, height: '68%' },
    { month: 'Oct', value: 88, height: '88%' },
  ];

  protected readonly recentApplications: LoanApplication[] = [
    {
      applicant: 'Olivia Rhye',
      initials: 'OR',
      type: 'Home loan',
      amount: '$320,000',
      status: 'Under review',
      statusClass: 'review',
    },
    {
      applicant: 'Phoenix Baker',
      initials: 'PB',
      type: 'Personal loan',
      amount: '$18,500',
      status: 'Approved',
      statusClass: 'approved',
    },
    {
      applicant: 'Lana Steiner',
      initials: 'LS',
      type: 'Auto loan',
      amount: '$42,800',
      status: 'Documents needed',
      statusClass: 'attention',
    },
    {
      applicant: 'Demi Wilkinson',
      initials: 'DW',
      type: 'Home loan',
      amount: '$265,000',
      status: 'In assessment',
      statusClass: 'review',
    },
  ];
}
