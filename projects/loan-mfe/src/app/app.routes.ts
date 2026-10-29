import { Routes } from '@angular/router';
import { LoanDashboard } from './pages/loan-dashboard/loan-dashboard';
import { LoanList } from './pages/loan-list/loan-list';

export const routes: Routes = [
    {   path: '',
        component: LoanDashboard,
    },
    {
        path: 'loan-list',
        component: LoanList,
    }
];
