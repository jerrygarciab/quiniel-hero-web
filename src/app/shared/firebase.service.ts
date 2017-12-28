import { Injectable }                                   from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { BehaviorSubject }                              from 'rxjs/BehaviorSubject';
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

  public getUser(userId: any): any {

    this.users
      .subscribe((users: Array<IUser>) => {

        return users.filter((user: any) => (user.userId === 'esteesunejemplodeUserIDFacebook'));

      });

    // let userToReturn: IUser;
    //
    // this.users.forEach((val: any) => {
    //
    //   userToReturn = val.filter((user: any) => (user.userId === 'esteesunejemplodeUserIDFacebook'));
    //   console.log(userToReturn);
    // });
    //
    // return userToReturn;

  }

}
