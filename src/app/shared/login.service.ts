import { Injectable }      from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable }      from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import { IFbUser }         from '../shared/fb-user';

import * as firebase       from 'firebase/app';

@Injectable()
export class LoginService {

  private _token: string;
  private loginSource = new BehaviorSubject(null);

  public loginInfo$ = this.loginSource.asObservable();

  constructor(private _auth: AngularFireAuth) { }

  public fbLogin(): any {

    return this._auth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider());

  }

  public fbLogout(): any {

    return this._auth.auth.signOut();

  }

  public storeToken(token: string): void {

    this._token = token;

  }

  public setUserInformation(userInfo): void {

    this.loginSource.next(userInfo);

  }

}
