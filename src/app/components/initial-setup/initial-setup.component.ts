import { Component, OnInit }                               from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute }                                  from '@angular/router';
import { FirebaseService }                                 from '../../shared/firebase.service';

import { IUser }                                           from '../../shared/firebase';

@Component({
  selector:    'app-initial-setup',
  templateUrl: './initial-setup.component.html',
  styleUrls:   ['./initial-setup.component.scss']
})
export class InitialSetupComponent implements OnInit {

  public setupForm:         FormGroup;
  public invalidField:      boolean;

  constructor(private fb:        FormBuilder,
              private _firebase: FirebaseService,
              private _route:    ActivatedRoute) {

    this.createForm();

    this.invalidField     = false;

  }

  ngOnInit() {

    this._route.params.subscribe(params => {
        console.log(params);
    });

    this._firebase.getUsers()
      .subscribe((res: IUser[]) => {

        console.log(res);

      })
  }

  saveUserInformation(post): void {

    if (this.setupForm.valid) {

      //this._firebase.setUser(post);
      console.log(post);
      this.setupForm.reset();

    } else {

      this.invalidField = true;

    }

  }

  // Auxiliar Functions //

  createForm(): void {
    this.setupForm = this.fb.group({
      name:     [null, Validators.required],
      lastName: [null, Validators.required],
      username: [null, Validators.required],
      email:    [null, Validators.email],
      city:     [null, Validators.required],
      state:    [null, Validators.required],
      country:  [null, Validators.required],
      favTeam:  [null, Validators.required],
      terms:    [null, Validators.required],
      userID:   ['jdsjjjsdjdjsd'],
    })
  }

}
