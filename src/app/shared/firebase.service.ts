import { Injectable }                                   from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable }                                   from 'rxjs/Observable';

import { IUser, IQuiniela, IQuinUser }                                        from './firebase';

@Injectable()
export class FirebaseService {

  private _usersCollection: AngularFirestoreCollection<IUser>;
  private _quinielasCollection: AngularFirestoreCollection<IQuiniela>;
  private _quinUsersCollection: AngularFirestoreCollection<IQuinUser>;

  public users:             Observable<IUser[]>;
  public quinielas:         Observable<IQuiniela[]>;
  public quinUsers:         Observable<IQuinUser[]>;

  constructor(private _afs: AngularFirestore) {

    this._usersCollection = this._afs.collection<IUser>('users');
    this.users = this._usersCollection.valueChanges();

    this._quinielasCollection = this._afs.collection<IQuiniela>('quinielas');
    this.quinielas = this._quinielasCollection.valueChanges();

    this._quinUsersCollection = this._afs.collection<IQuinUser>('quinielausers');
    this.quinUsers = this._quinUsersCollection.valueChanges();

  }

  public getUsers(): Observable<IUser[]> {

    return this.users;

  }

  public getUser(userId: any): any {
    let userToReturn : IUser;
//console.log("getUsr");
  if(Object.keys(this.users).length !=0){

    this.users
    .subscribe((users: Array<IUser>) => {
      return users.filter( user=> (user.username === "kluzter")); //hardcoded for testing should be kluzter
  //    console.log("subsciprtion of user"+userToReturn.username);
      
    });
  }
//console.log("NAME:"+this.users.)
   return userToReturn;
  
  //return IUser;
  
    // let userToReturn: IUser;
    
    // this.users.forEach((val: any) => {
    
    //   userToReturn = val.filter((user: any) => (user.userId === '1824917164205033'));//hardoded user kluz
    //   console.log(userToReturn);
    // });
    
    // return userToReturn;

  }

  //Quiniela functions
  public setQuiniela(quiniela: IQuiniela): void {

    this._quinielasCollection.add(quiniela);

  }

  public getQuinielas(): Observable<IQuiniela[]> {

    return this.quinielas;

  }

  public setUser(user: IUser): void {

    this._usersCollection.add(user);

  }

  //AcceptFriends functions
  public acceptFriends(quiniela: IQuinUser): void {

    this._quinUsersCollection.add(quiniela);

  }

}
