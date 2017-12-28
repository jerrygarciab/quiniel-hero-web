import { BrowserModule }                    from '@angular/platform-browser';
import { NgModule }                         from '@angular/core';
import { RouterModule }                     from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FacebookModule }                   from 'ngx-facebook';
import { NgbModule }                        from '@ng-bootstrap/ng-bootstrap';
import { AngularFireModule }                from 'angularfire2';
import { AngularFireAuthModule }            from 'angularfire2/auth';
import { AngularFirestoreModule }           from 'angularfire2/firestore';

import { LoginService }                     from './shared/login.service';
import { FirebaseService }                  from './shared/firebase.service';

import { AppComponent }                     from './app.component';
import { LoginComponent }                   from './components/login/login.component';
import { InitialSetupComponent }            from './components/initial-setup/initial-setup.component';
import { HeaderComponent }                  from './components/header/header.component';

import { routes }                           from './app.routes';
import { environment }                      from '../environments/environment';
import { QuinielaSetupComponent }           from './components/quiniela-setup/quiniela-setup.component';
import { InviteFriendsComponent }           from './components/invite-friends/invite-friends.component';
import { MyPicksComponent }                 from './components/my-picks/my-picks.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InitialSetupComponent,
    HeaderComponent,
    QuinielaSetupComponent,
    InviteFriendsComponent,
    MyPicksComponent
  ],
  imports: [
    BrowserModule,
    FacebookModule.forRoot(),
    NgbModule.forRoot(),
    RouterModule.forRoot(routes, {enableTracing: false}),
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule
  ],
  exports:   [ RouterModule ],
  providers: [ LoginService, FirebaseService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
