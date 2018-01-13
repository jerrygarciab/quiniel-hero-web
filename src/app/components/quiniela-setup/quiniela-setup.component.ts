import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute }                                  from '@angular/router';
import { FirebaseService }                                 from '../../shared/firebase.service';

@Component({
  selector: 'app-quiniela-setup',
  templateUrl: './quiniela-setup.component.html',
  styleUrls: ['./quiniela-setup.component.scss']
})
export class QuinielaSetupComponent implements OnInit {
  public qsetupForm:    FormGroup;
  public invalidField: boolean;
  public quiniela:         string;

  constructor(private fb:        FormBuilder,
              private _firebase: FirebaseService,
              private _route:    ActivatedRoute) {

    this.createForm();

    this.invalidField     = false;
  }

  ngOnInit() {
  }
  saveQuinielaInformation(post): void {

    if (this.qsetupForm.valid) {

      this._firebase.setQuiniela(post);
      console.log(post);
      //this.qsetupForm.reset();

    } else {

      this.invalidField = true;

    }

  }
  createForm(): void {
    this.qsetupForm = this.fb.group({
      quiniela:     [null, Validators.required],
      active:       [true],
      idQuiniela:   [1],
      adminuser: ["Kluzter"] // hcode for now, should come from session valid username
    })
  }
}
