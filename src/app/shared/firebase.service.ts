import { Injectable }                                   from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable }                                   from 'rxjs/Observable';

import { IUser, IQuiniela, IQuinUser }                                        from './firebase';
import { AngularFireAuth } from 'angularfire2/auth';


@Injectable()
export class FirebaseService {

  private _usersCollection: AngularFirestoreCollection<IUser>;
  private _quinielasCollection: AngularFirestoreCollection<IQuiniela>;
  private _quinUsersCollection: AngularFirestoreCollection<IQuiniela>;

  public users:             Observable<IUser[]>;
  public quinielas:         Observable<IQuiniela[]>;
  public quinUsers:         Observable<IQuiniela[]>;
  public foundUser:         IUser;

  public userDoc:           AngularFirestoreDocument<IUser>;
  public quinielaDoc:       AngularFirestoreDocument<IQuiniela>;


  constructor(private _afs: AngularFirestore) {

    this._usersCollection = this._afs.collection<IUser>('users', x => x.orderBy('username', 'asc'));
    this.users = this._usersCollection.snapshotChanges().map(
                  changes => {
                    return changes.map(
                      a => {
                        const data = a.payload.doc.data() as IUser;
                        data.userkey = a.payload.doc.id;
                        return data;
                      });
                  }
              );

    this._quinielasCollection = this._afs.collection<IQuiniela>('quinielas', x => x.orderBy('idQuiniela', 'asc'));
    this.quinielas = this._quinielasCollection.snapshotChanges().map(
                      changes => {
                        return changes.map(
                          a => {
                            const data = a.payload.doc.data() as IQuiniela;
                            data.quinielakey = a.payload.doc.id;
                          
                            return data;
                          });
                      }
  );

   
  

  }

  public getUsers(): Observable<IUser[]> {

    return this.users;

  }

  public getUser(userId: any): any {
  // this.userDoc = this._afs.doc('users/'+userId);
  // return this.userDoc; 

    let auxUser: IUser;

  if(Object.keys(this.users).length !=0){
    // this.foundUser =
      this.users.map(
        (items:IUser[]) => auxUser = items.find(p=> p.name == userId)
        
      );
      //this.foundUser = auxUser[0];
    console.log("FOUND->:\n"+ auxUser);
    return auxUser;
  }
//console.log("NAME:"+this.users.)
   return 0;

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
  public deleteUser(user) { // TODO test this shiat
    this.userDoc = this._afs.doc('users/${user.userid}');
    this.userDoc.delete();
  }

  //AcceptFriends functions
  public acceptFriends(quiniela: IQuiniela): void {
    //this.quinielaDoc = this._afs.doc('quinielas/${quiniela.idQuiniela}');
    
    this._quinUsersCollection = this._afs.collection<IQuiniela>('quinielas/'+quiniela.quinielakey+'/iusers');
  this.quinUsers = this._quinUsersCollection.valueChanges();

     console.log("Path!\n"+quiniela.quinielakey);
    // console.log("quinid:"+quiniela.quinielakey);
    // //this.userDoc.add();
    this._quinUsersCollection.add(quiniela);

  }

}
