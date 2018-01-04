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
export class OverallPointsComponent implements OnInit {
  
  
  constructor(private fb:        FormBuilder,
              ) {
      this.createForm();
   //   this.invalidField     = false;
    }

  ngOnInit() {
  }


  
  // Auxiliar Functions //

  createForm(): void {
    // this.inviteForm = this.fb.group({
    //   name:     [null, Validators.required],
    //   username:     [null, Validators.required],
    //   userID:   ['jdsjjjsdjdjsd'],
    // })
  }

}
