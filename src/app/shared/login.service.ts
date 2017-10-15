import { Injectable }      from '@angular/core';
import { Observable }      from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import { IFbUser }         from '../shared/fb-user';

import * as firebase       from 'firebase/app';

@Injectable()
export class LoginService {

  private _token: string;

  constructor(private _auth: AngularFireAuth) { }

  public fbLogin(): void {

    this._auth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider());

  }

  public fbLogout(): void {

    this._auth.auth.signOut();

  }

  public storeToken(token: string): void {

    this._token = token;
    
  }

}
