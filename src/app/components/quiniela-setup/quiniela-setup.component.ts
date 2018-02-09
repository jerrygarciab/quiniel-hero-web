import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute }                                  from '@angular/router';
import { FirebaseService }                                 from '../../shared/firebase.service';
import { IUser, IQuiniela } from '../../shared/firebase';

@Component({
  selector: 'app-quiniela-setup',
  templateUrl: './quiniela-setup.component.html',
  styleUrls: ['./quiniela-setup.component.scss']
})
export class QuinielaSetupComponent implements OnInit {
  public qsetupForm:    FormGroup;
  public invalidField:  boolean;
  public quinielaname:  string;
  public adminId:       IUser;
  public quinielas:      IQuiniela[] = [];

  constructor(private fb:        FormBuilder,
              private _firebase: FirebaseService,
              private _route:    ActivatedRoute) {
  
    //TODO get this userid from "session" or realFirebasehit
    //this.adminID = getUser('idUsuario');
    this.adminId = {
      email: "string",
      favTeam: "string",
      lastname: "string",
      name: "string",
      profilePicture: "string",
      username: "string",
      userID: "kluzter",
      terms: true,
      userkey: "fpRImo5ubuhztuT8IH6y",
      address: {
        city: "string",
        country: "string",
        state: "string"
      },

    };

    this.createForm();
    this.invalidField = false;

  }

  ngOnInit() {
  
    this._route.params.subscribe(params => {
      console.log(params);
    });
  
    this._firebase.getQuinielas()
    .subscribe((res: IQuiniela[]) => {
      this.quinielas = res;
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
      quinielaname:     [null, Validators.required],
      active:       [true],
      idQuiniela:   [1],
      userkey:      this.adminId.userkey,
      adminuser:    this.adminId // hcode for now, should come from session valid username
    })
  }

}
