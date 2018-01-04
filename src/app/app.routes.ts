import { Routes }                 from '@angular/router';
import { LoginComponent }         from './components/login/login.component';
import { InitialSetupComponent }  from './components/initial-setup/initial-setup.component';
import { InviteFriendsComponent } from './components/invite-friends/invite-friends.component';
import { MyPicksComponent }       from './components/my-picks/my-picks.component';
import { QuinielaSetupComponent } from './components/quiniela-setup/quiniela-setup.component';
import { RealTimeComponent }      from './components/realtime/realtime.component';
import { OverallPointsComponent } from './components/overallpoints/overallpoints.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'setup', component: InitialSetupComponent },
  { path: 'my-picks', component: MyPicksComponent},
  { path: 'quiniela-setup',  component: QuinielaSetupComponent},
  { path: 'realtime', component: RealTimeComponent},
  { path: 'overallpoints', component: OverallPointsComponent},
  { path: 'invite-friends', component: InviteFriendsComponent},
  { path:            '', redirectTo: '/login', pathMatch: 'full'}
];
