
import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { InitialSetupComponent } from './components/initial-setup/initial-setup.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'setup', component: InitialSetupComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full'}
];
