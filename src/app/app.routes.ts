import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', loadComponent: () => import('./home/home.component').then(m => m.HomeComponent)},
    {path: 'login', loadComponent: () => import('./login/login.component').then(m => m.LoginComponent)},
    {path: 'dashboard', loadComponent: () => import('./dashboard-container/dashboard-container.component').then(m => m.DashboardContainerComponent), children: [
        {path: 'dashboard-overview', data: {title: 'Overview'}, loadComponent: () => import('./dashboard/dashboard.component').then(m => m.DashboardComponent)},
        {path: 'job-list', data: {title: 'Job List'}, loadComponent: () => import('./job-list/job-list.component').then(m => m.JobListComponent)}
    ]},
];
