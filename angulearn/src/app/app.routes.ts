import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { NewUserComponent } from './components/new-user/new-user.component';

export const routes: Routes = [
  // {path: '', component: LoginComponent},
  { path: 'login', component: LoginComponent },
  { path: 'new-user', component: NewUserComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'login' },
  // {path: 'dashboard', loadComponent: () => import('./dashboard/dashboard')}
];

