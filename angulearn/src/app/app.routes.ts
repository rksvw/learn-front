import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { NewUserComponent } from './components/new-user/new-user.component';
import { SinglePageComponent } from './components/single-page/single-page.component';

export const routes: Routes = [
  // {path: '', component: LoginComponent},
  { path: 'login', component: LoginComponent },
  { path: 'new-user', component: NewUserComponent },
  // { path: '', redirectTo: 'login', pathMatch: 'full' },
  {path: '', component: SinglePageComponent},
  { path: '**', redirectTo: 'login' },
  // {path: 'dashboard', loadComponent: () => import('./dashboard/dashboard')}
];

