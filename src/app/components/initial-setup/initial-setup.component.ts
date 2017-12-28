import { Component, OnInit }                               from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router }                                          from '@angular/router';
import { Observable }                                      from 'rxjs/Rx';
import { forkJoin }                                        from "rxjs/observable/forkJoin";
import { FirebaseService }                                 from '../../shared/firebase.service';

import { LoginService }                                    from '../../shared/login.service';

import { IUser }                                           from '../../shared/firebase';

@Component({
  selector:    'app-initial-setup',
  templateUrl: './initial-setup.component.html',
  styleUrls:   ['./initial-setup.component.scss']
})
export class InitialSetupComponent implements OnInit {

  public setupForm:    FormGroup;
  public invalidField: boolean;
  public name:         string;
  public user:         string;
  public lastname:     string;
  public email:        string;
  public userId:       string;

  constructor(private fb:        FormBuilder,
              private _firebase: FirebaseService,
              private _login:    LoginService,
              private _router:   Router) { }

  ngOnInit() {

    this.invalidField = false;

    this._login.loginInfo$
      .subscribe(userInfo => {

        if (userInfo !== null) {

          this.name     = userInfo.name;
          this.lastname = userInfo.lastname;
          this.email    = userInfo.email;
          this.userId   = userInfo.id;

        }

        this.createForm();

      });

  }

  saveUserInformation(post): void {

    this.invalidField = (!this.setupForm.valid);

    if (this.invalidField) return;

    this._firebase.setUser(post);
    this.setupForm.reset();
    this._router.navigate(['quiniela-setup']);

  }

  // Auxiliar Functions //

  createForm(): void {

    this.setupForm = this.fb.group({
      name:     [this.name, Validators.required],
      lastName: [this.lastname, Validators.required],
      username: [null, Validators.required],
      email:    [this.email, Validators.email],
      city:     [null, Validators.required],
      state:    [null, Validators.required],
      country:  [null, Validators.required],
      favTeam:  [null, Validators.required],
      terms:    [null, Validators.required],
      userID:   [this.userId],
    });

  }

}
