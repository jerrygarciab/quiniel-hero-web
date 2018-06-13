import { Injectable }                                   from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable }                                   from 'rxjs/Observable';

import {IUser, IQuiniela, IQuinUser, IRoundPick, ITournament, IMatch} from './firebase';
import { AngularFireAuth } from 'angularfire2/auth';


@Injectable()
export class FirebaseService {

  private _usersCollection: AngularFirestoreCollection<IUser>;
  private _quinielasCollection: AngularFirestoreCollection<IQuiniela>;
  private _quinUsersCollection: AngularFirestoreCollection<IUser>;

  public users:             Observable<IUser[]>;
  public quinielas:         Observable<IQuiniela[]>;
  public quinUsers:         Observable<IQuiniela[]>;
  public foundUser:         IUser;

  public userDoc:           AngularFirestoreDocument<IUser>;
  public quinielaDoc:       AngularFirestoreDocument<IQuiniela>;


  private _matchpickCollection: AngularFirestoreCollection<IMatch>;
  public matchpicks:             Observable<IMatch[]>;
  public matchpickDoc:      AngularFirestoreDocument<IMatch>;


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

    // this._quinielasCollection = this._afs.collection<IQuiniela>('quinielas', x => x.orderBy('idQuiniela', 'asc'));

    this._quinielasCollection = this._afs.collection<IQuiniela>('quinielas');
    // this.quinielas = this._quinielasCollection.valueChanges();

    this.quinielas = this._quinielasCollection.snapshotChanges().map(
                      changes => {
                        return changes.map(
                          a => {
                            const data = a.payload.doc.data() as IQuiniela;
                            data.quinielakey = a.payload.doc.id;

                            return data;
                          });
                      });




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
  public acceptFriend(quinielakey: string, friend: IUser): Promise<any> {

    this._quinUsersCollection = this._afs.collection<IUser>('quinielas/' + quinielakey + '/iusers');

     console.log("Path!\n" + quinielakey);
    return this._quinUsersCollection.add(friend);

  }

  public getUserRoundPicksMatches(quinielakey:string, user:string, userRoundPick:string): AngularFirestoreCollection<IMatch> {

    return this._afs.collection<IMatch>(`quinielas/${quinielakey}/iusers/${user}/userpicks/${userRoundPick}/matches/`);
  }

  public getTournamentRounds(tournamentkey: string): AngularFirestoreCollection<ITournament> {

    return this._afs.collection<ITournament>(`tournament/${tournamentkey}/rounds/`);
  }

  
  
    public getUserMatchpicks(quinielakey:string, user:string, userRoundPick:string): void {
    // console.log("Getting matchesID");
    this._matchpickCollection = this._afs.collection<IMatch>(`quinielas/${quinielakey}/iusers/${user}/userpicks/${userRoundPick}/matches/`, x => x.orderBy('matchid', 'asc'));
    this.matchpicks = this._matchpickCollection.snapshotChanges().map(
                  changes => {
                    return changes.map(
                      a => {
                        const matchdata = a.payload.doc.data() as IMatch;
                        matchdata.matchkey = a.payload.doc.id;
                        return matchdata;
                      });
                  }
              );
   
    // this.matchpickDoc = this._afs.doc(`quinielas/${quinielakey}/iusers/${user}/userpicks/${userRoundPick}/matches/${matchid}/`);
    // this.matchpickDoc.update(matchpick);
  }
  public getMatchPicks(): Observable<IMatch[]> {

    return this.matchpicks;

  }

  public getMatch(matchId: string): any {
    // this.userDoc = this._afs.doc('users/'+userId);
    // return this.userDoc;
  
      let auxMatch: IMatch;
  
    if(Object.keys(this.matchpicks).length !=0){
      // this.foundUser =
        this.matchpicks.map(
          (items:IMatch[]) => auxMatch = items.find(p=> p.matchid == matchId)
  
        );
        //this.foundUser = auxUser[0];
      console.log("FOUND->:\n"+ auxMatch);
      return auxMatch;
    }
  //console.log("NAME:"+this.users.)
     return 0;
  
    }

  public updateMatch(quinielakey:string, user:string, userRoundPick:string, matchdata: IMatch): any {
      return this._afs.doc<IMatch>(`quinielas/${quinielakey}/iusers/${user}/userpicks/${userRoundPick}/matches/${matchdata.matchkey}`).update({localscore:matchdata.localscore, visitorscore:matchdata.visitorscore});
    }

  // public setPickMatches(matches:IMatch[]):Promise<any>{
  //   return this._afs.app.firestore().runTransaction( (transaction) => {

  //     matches.forEach( (match:IMatch)=>{
  //       transaction.update( matches[match.matchId], match);
  //     })


  //   }).then(function(matches) {
  //     console.log("Matches saved ", matches);
  //   }).catch(function(err) {
  //     // This will be an "population is too big" error.
  //     console.error(err);
  //   });
  // }

}
