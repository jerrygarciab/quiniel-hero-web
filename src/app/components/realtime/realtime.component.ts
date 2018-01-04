import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute }                                  from '@angular/router';
import { FirebaseService }                                 from '../../shared/firebase.service';

import { IUser }                                           from '../../shared/firebase';

@Component({
  selector: 'app-realtime',
  templateUrl: './realtime.component.html',
  styleUrls: ['./realtime.component.scss']
})
export class RealTimeComponent implements OnInit {
  
  public pointsMap: Array<any>;
  public invalidField: boolean;
  public realTimeForm:    FormGroup;
  public theresalist: boolean = false;

  constructor(private fb:        FormBuilder,
              ) {
      this.createForm();
      this.invalidField     = false;
      this.pointsMap = [
        { "userid":"ger10a", "nombre":"Gerardo", "points":"7", "maxpoints": "15" },
        { "userid":"kluzter5", "nombre":"Emmanuel", "points":"10", "maxpoints": "15" },
        { "userid":"shizza7", "nombre":"Cesar", "points":"1", "maxpoints": "12" }
      ];
    }

  ngOnInit() {
  }

  getReal(): void {
    
    this.theresalist = true;
  }
  getRealTime(post): void {
  
        if (this.realTimeForm.valid) {
    
          //this._firebase.setUser(post);
          console.log(post);
          this.realTimeForm.reset();
          
        } else {
    
          this.invalidField = true;
    
        }
    
      }

  
  // Auxiliar Functions //

  createForm(): void {
    this.realTimeForm = this.fb.group({
      name:     [null, Validators.required],
      points:     [null, Validators.required],
      userID:   ['jdsjjjsdjdjsd'],
    })
  }

}
