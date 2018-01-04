import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-my-picks',
  templateUrl: './my-picks.component.html',
  styleUrls: ['./my-picks.component.scss']
})
export class MyPicksComponent implements OnInit {
  public picksForm:    FormGroup;
  public invalidField: boolean;
  public gamespicks: Array<any>;

  constructor(private fb:        FormBuilder
              ) {
      this.createForm();
      this.invalidField     = false;
      this.picksgen();
    }

  ngOnInit() {
  }
  picksgen(): void {
    this.gamespicks = [
      { "match":"01", "local":"Puebla", "visita":"Tigres"},
      { "match":"02", "local":"Atlas", "visita":" Leon"},
      { "match":"03", "local":"Cruz Azul", "visita":" Tijuana"},
      { "match":"04", "local":"Monterrey", "visita":" Morelia"},
      { "match":"05", "local":"Pachuca", "visita":" Pumas"},
      { "match":"06", "local":"Necaxa", "visita":" Veracruz"},
      { "match":"07", "local":"Toluca", "visita":" Guadalajara"},
      { "match":"08", "local":"Queretaro", "visita":" America"},
      { "match":"09", "local":"Santos", "visita":" Lobos"},
    ];
   
  }


  savePicsInformation(post): void {

    if (this.picksForm.valid) {

      //this._firebase.setUser(post);
      console.log(post);
      this.picksForm.reset();

    } else {

      this.invalidField = true;

    }

  }

  createForm(){
    this.picksForm = this.fb.group({
      local01:    [null, Validators.required],
      visita01:    [null, Validators.required],
      local02:    [null, Validators.required],
      visita02:    [null, Validators.required],
      local03:    [null, Validators.required],
      visita03:    [null, Validators.required],
      local04:    [null, Validators.required],
      visita04:    [null, Validators.required],
      local05:    [null, Validators.required],
      visita05:    [null, Validators.required],
      local06:    [null, Validators.required],
      visita06:    [null, Validators.required],
      local07:    [null, Validators.required],
      visita07:    [null, Validators.required],
      local08:    [null, Validators.required],
      visita08:    [null, Validators.required],
      local09:    [null, Validators.required],
      visita09:    [null, Validators.required],
      userID:   ['jdsjjjsdjdjsd'],
    })
  }
}
