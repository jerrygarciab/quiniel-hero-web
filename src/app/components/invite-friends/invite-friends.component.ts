import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validators, FormArray} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {FirebaseService} from '../../shared/firebase.service';
import {filter} from 'rxjs/operators';

import {IUser} from '../../shared/firebase';
import {IQuinUser} from '../../shared/firebase';
import {IQuiniela} from '../../shared/firebase';

@Component({
  selector: 'app-invite-friends',
  templateUrl: './invite-friends.component.html',
  styleUrls: ['./invite-friends.component.scss']
})
export class InviteFriendsComponent implements OnInit {
//Standard properties:
  public inviteForm: FormGroup;
  public errorMessage: string;
  public invalidField: boolean;
//Custom properties:
  public usermap: Array<any>; //map with searched users
  public theresalist: boolean = false;
  public searchedusers: Array<IUser>; //map of to be added users
  public resultusers: Array<IUser>;
  public invitedusers: Array<IUser>; //map of to be added users
  public quinielakey: string; // quiniela to add users to, should come from "session"


  constructor(private fb: FormBuilder,
              private _firebase: FirebaseService,
              private _route: ActivatedRoute
  ) {

    this.invalidField = false;
    //   this.searchFriends();
    this.createForm();
  }

  ngOnInit() {
    //this.searchFriends();
    //create results form search //need to filter
    let auxusr: IUser;
    this._firebase.getUsers()
      .subscribe((res: IUser[]) => {
        this.searchedusers = res;
        console.log(res);
      });

    this.quinielakey = 'zSy0blPOmOyPFFBqUrZY';
  }

  searchFriends(usrname): void {
    //let usrname = this.inviteForm.controls[]
    //let usrname = this.fb.control.caller.toString();
    console.log('Searched: ' + usrname);
    this.theresalist = true;
//console.log("userarray "+this.searchedusers[0].name);
    this.resultusers = (this.searchedusers.filter(
      user => user.name == usrname));
    //this.searchedusers = this.invitedusers;


  }

  saveFriendsInformation(post): void {

    // console.log("Friends "+this.invitedusers+"\nValidform: "+this.inviteForm.valid);

    if (this.inviteForm.valid && this.theresalist) {
      //console.log(post.post["usuarios"][0]);
      // this._firebase.acceptFriend(post);
      console.log('SavedFriends\n' + post.usersid);
      // this.inviteForm.reset();

    } else {

      this.invalidField = true;

    }

  }

  inviteFriend(user: IUser): void {
    console.log(user);

    this._firebase.acceptFriend(this.quinielakey, user).then(() => {
      console.log('friend added √');
    }).catch(error => console.error(error));

  }


  // Auxiliar Functions //

  createForm(): void {
    this.inviteForm = this.fb.group({
      //name:     [null, Validators.required],
      username: [null, Validators.required], //validate this is the Quiniela Owner
      //userid:   ['jdsjjjsdjdjsd'],
      usersid: this.fb.array([]),
      idQuiniela: 1, //should come from session value
      quinielakey: 'zSy0blPOmOyPFFBqUrZY'//should come from session value
    });
    //Build result controllers
  }

  onChange(name: string, isChecked: boolean) {
    const invitadoFormArray = <FormArray>this.inviteForm.controls.usersid;
    var temp: IUser;
    if (isChecked) {
      invitadoFormArray.push(new FormControl(name));
      temp = this._firebase.getUser(name);
    } else {
      let index = invitadoFormArray.controls.findIndex(x => x.value == name);
      invitadoFormArray.removeAt(index);
    }
  }


}
