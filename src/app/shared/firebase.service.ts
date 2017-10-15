import { Injectable }                                   from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable }                                   from 'rxjs/Observable';

import { IUser }                                        from './firebase';

@Injectable()
export class FirebaseService {

  private _usersCollection: AngularFirestoreCollection<IUser>;

  public users:             Observable<IUser[]>;

  constructor(private _afs: AngularFirestore) {

    this._usersCollection = this._afs.collection<IUser>('users');
    this.users = this._usersCollection.valueChanges();

  }

  public getUsers(): Observable<IUser[]> {

    return this.users;

  }

  public setUser(user: IUser): void {

    this._usersCollection.add(user);
    
  }

}
