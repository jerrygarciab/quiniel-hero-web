import { Injectable }                                   from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable }                                   from 'rxjs/Observable';

import { IUser, IQuiniela }                                        from './firebase';

@Injectable()
export class FirebaseService {

  private _usersCollection: AngularFirestoreCollection<IUser>;
  private _quinielasCollection: AngularFirestoreCollection<IQuiniela>;

  public users:             Observable<IUser[]>;
  public quinielas:         Observable<IQuiniela[]>;

  constructor(private _afs: AngularFirestore) {

    this._usersCollection = this._afs.collection<IUser>('users');
    this.users = this._usersCollection.valueChanges();

    this._quinielasCollection = this._afs.collection<IQuiniela>('quinielas');
    this.quinielas = this._quinielasCollection.valueChanges();


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

  //Quiniela functions
  public setQuiniela(quiniela: IQuiniela): void {

    this._quinielasCollection.add(quiniela);

  }

}
