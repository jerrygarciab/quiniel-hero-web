import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute }                                  from '@angular/router';
import { FirebaseService }                                 from '../../shared/firebase.service';

import { IUser }                                           from '../../shared/firebase';

@Component({
  selector: 'app-overallpoints',
  templateUrl: './overallpoints.component.html',
  styleUrls: ['./overallpoints.component.scss']
})
export class OverallPointsComponent implements OnInit {
  
  public overallPointsForm:    FormGroup;
  public theresalist: boolean = false;
  public invalidField: boolean;
  public opointsMap: Array<any>;


  constructor(private fb:        FormBuilder,
              ) {
      this.createForm();
     this.invalidField     = false;
     this.opointsMap = [
      { "userid":"ger10a", "nombre":"Gerardo", "j1":"7", "j2":"7", "j3":"7", "j4":"7", "j5":"7","j6":"7","j7":"7","j8":"7","j9":"7","j10":"7","j11":"7","j12":"7","j13":"7","j14":"7","j15":"7","j16":"7","j17":"7", "suma":"77", "maxpoints": "15" },
      { "userid":"kluzter5", "nombre":"Emmanuel", "points":"10", "maxpoints": "15" },
      { "userid":"shizza7", "nombre":"Cesar", "points":"1", "maxpoints": "12" }
      ];
    }

  ngOnInit() {
  }

  getPoints(){

  }
getOverallPoints(post): void {
  
        if (this.overallPointsForm.valid) {
    
          //this._firebase.setUser(post);
          console.log(post);
          this.overallPointsForm.reset();
          
        } else {
    
          this.invalidField = true;
    
        }
    
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
