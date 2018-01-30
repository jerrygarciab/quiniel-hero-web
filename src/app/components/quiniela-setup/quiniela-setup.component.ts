import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute }                                  from '@angular/router';
import { FirebaseService }                                 from '../../shared/firebase.service';
import { IUser } from '../../shared/firebase';

@Component({
  selector: 'app-quiniela-setup',
  templateUrl: './quiniela-setup.component.html',
  styleUrls: ['./quiniela-setup.component.scss']
})
export class QuinielaSetupComponent implements OnInit {
  public qsetupForm:    FormGroup;
  public invalidField: boolean;
  public quiniela:         string;
  public adminId: IUser;

  constructor(private fb:        FormBuilder,
              private _firebase: FirebaseService,
              private _route:    ActivatedRoute) {
  
    //TODO get this userid from "session" or realFirebasehit
    //this.adminID = getUser('idUsuario');
    this.adminId = {email: "string",
      favorite_team: "string",
      last_name: "string",
      name: "string",
      profilePicture: "string",
      username: "string",
      userID: "kluzter",
      address: {
        city: "string",
        country: "string",
        state: "string"
      }
    };
    this.createForm();
    this.invalidField = false;

  }

  ngOnInit() {
  
    this._route.params.subscribe(params => {
      console.log(params);
    });
  
    this._firebase.getUsers()
    .subscribe((res: IUser[]) => {
      console.log(res);
    });

  }


  saveQuinielaInformation(post): void {
    
    if (this.qsetupForm.valid) {
      this._firebase.setQuiniela(post); //this totaly works
    //  console.log("SAVED"+post);
      //this.qsetupForm.reset();
    } else {

      this.invalidField = true;
    //  console.log(post); // debug log

    }

  }
  createForm(): void {
  
   // console.log("AdminID sent"+this.adminId.userID);

    this.qsetupForm = this.fb.group({
      quiniela:     [null, Validators.required],
      active:       [true],
      idQuiniela:   [1],
     // userid:       [null, Validators.required],
      IUser:    this.adminId // hcode for now, should come from session valid username
    })
  }

}
