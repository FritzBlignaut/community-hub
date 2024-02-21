import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', loadComponent: () => import('./home/home.component').then(m => m.HomeComponent)},
    {path: 'login', loadComponent: () => import('./login/login.component').then(m => m.LoginComponent)},
    {path: 'dashboard', loadComponent: () => import('./dashboard/dashboard.component').then(m => m.DashboardComponent), children: [
        {path: 'job-list', loadComponent: () => import('./job-list/job-list.component').then(m => m.JobListComponent)}
    ]},
];
