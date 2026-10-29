import { Routes } from '@angular/router';
import { InsuranceDashboard } from './pages/insurance-dashboard/insurance-dashboard';
import { ClaimList } from './pages/claim-list/claim-list';

export const routes: Routes = [
    {
        path: '',
        component: InsuranceDashboard,
    },
    {
        path: 'claim-list',
        component: ClaimList,
    }
];
