import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { Observable }        from 'rxjs/Observable';
import { AngularFireAuth }   from 'angularfire2/auth';
import { LoginService }      from '../../shared/login.service';

import { IFbUser }           from '../../shared/fb-user';

@Component({
  selector: 'qh-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public user = {} as IFbUser;

  constructor(private _auth: AngularFireAuth,
              private _login:  LoginService) { }

  ngOnInit() {

    this._getFbUserValues();

  }

  public login(): void {

    this._login.fbLogin();

  }

  public logout(): void {

    this._login.fbLogout();

  }

  private _getFbUserValues(): void {

    this._auth.authState
      .subscribe(res => {

        if (res === null) return;

        this.user.displayName = res.displayName;
        this.user.email       = res.email;
        this.user.photoUrl    = res.photoURL;
        this.user.uid         = res.uid;
        //this.token = res.getToken();

        this._login.storeToken(res.refreshToken);

    });

  }

}
