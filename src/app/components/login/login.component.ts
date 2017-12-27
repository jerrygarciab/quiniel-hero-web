import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { Observable }        from 'rxjs/Observable';
import { AngularFireAuth }   from 'angularfire2/auth';
import { LoginService }      from '../../shared/login.service';
import { FirebaseService }   from '../../shared/firebase.service';

import { IFbUser }           from '../../shared/fb-user';
import { IUser }             from '../../shared/firebase';

@Component({
  selector:    'qh-login',
  templateUrl: './login.component.html',
  styleUrls:   ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public user = {} as IFbUser;

  constructor(private _auth:   AngularFireAuth,
              private _login:  LoginService,
              private _db:     FirebaseService,
              private _router: Router) { }

  ngOnInit() {

    this._checkIfLogged();

  }

  public login(): void {

    this._login.fbLogin()
      .then(res => {

        this._setUserInformation(res.additionalUserInfo);
        this._login.storeToken(res.credential.accessToken);
        this._decideNextComponent();

      })
      .catch(err => {

        // TODO Add a shared service for error handling and displaying that error
        console.error(err);

      });

  }

  public logout(): void {

    this._login.fbLogout()
      .then(res => {
        // TODO Add a shared service for error handling and displaying that error
      })
      .catch(err => {
        // TODO Add a shared service for error handling and displaying that error
      });

  }

  private _checkIfLogged(): void {

    this._auth.authState
      .subscribe(res => {

        if (res !== null) this._decideNextComponent();

      });

  }

  private _setUserInformation(userInfo: any): void {

    this.user.name       = userInfo.profile.first_name;
    this.user.lastname   = userInfo.profile.last_name;
    this.user.profileUrl = userInfo.profile.link;
    this.user.email      = userInfo.profile.email;
    this.user.photoUrl   = userInfo.profile.picture.data.url;
    this.user.id         = userInfo.profile.id;

  }

  private _decideNextComponent(): void {

    let userLocal: any;

    this._db.getUsers()
      .subscribe((users: Array<IUser>) => {

        userLocal = users.filter((user: any) => (user.userId === 'esteesunejemplodeUserIDFacebook'));

        // TODO change logic to be inverse...
        (userLocal.length > 0) ? this._router.navigate(['setup', this.user], {skipLocationChange: true}) : this._router.navigate(['login']);

      },err => {
        console.error(err);
      });


  }

}
