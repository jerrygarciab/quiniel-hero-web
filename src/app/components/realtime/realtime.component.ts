import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute }                                  from '@angular/router';
import { FirebaseService }                                 from '../../shared/firebase.service';

import { IUser }                                           from '../../shared/firebase';

@Component({
  selector: 'app-invite-friends',
  templateUrl: './invite-friends.component.html',
  styleUrls: ['./invite-friends.component.scss']
})
export class InviteFriendsComponent implements OnInit {
  
  public usermap: Array<any>;
  public invalidField: boolean;
  public inviteForm:    FormGroup;
  public theresalist: boolean = false;

  constructor(private fb:        FormBuilder,
              ) {
      this.createForm();
      this.invalidField     = false;
    }

  ngOnInit() {
  }

  searchFriends(): void {
    this.usermap = [
      { "userid":"ger10a", "nombre":"Gerardo", "username":"ger10" },
      { "userid":"kluzter5", "nombre":"Emmanuel", "username":"kluzter" },
      { "userid":"shizza7", "nombre":"Cesar", "username":"tolegol" }
    ];
    this.theresalist = true;
  }
  searchFriendsInformation(post): void {
  
        if (this.inviteForm.valid) {
    
          //this._firebase.setUser(post);
          console.log(post);
          this.inviteForm.reset();
          
        } else {
    
          this.invalidField = true;
    
        }
    
      }

  
  // Auxiliar Functions //

  createForm(): void {
    this.inviteForm = this.fb.group({
      name:     [null, Validators.required],
      username:     [null, Validators.required],
      userID:   ['jdsjjjsdjdjsd'],
    })
  }

}
