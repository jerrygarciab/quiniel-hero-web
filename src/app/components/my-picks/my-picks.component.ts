import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';

import {ActivatedRoute} from '@angular/router';
import {FirebaseService} from '../../shared/firebase.service';

import {IRoundPick, IUser} from '../../shared/firebase';

@Component({
  selector: 'app-my-picks',
  templateUrl: './my-picks.component.html',
  styleUrls: ['./my-picks.component.scss']
})
export class MyPicksComponent implements OnInit {
  public picksForm: FormGroup;
  public invalidField: boolean;
  public gamespicks: Array<any>;
  public goles: Array<any>;
  public user: IUser;
  public userRoundPicks: IRoundPick;
  public tournamentRounds: any;
  public matchCount: Array<number>;
  public tournamentkey: string;
  public roundkey: string;

  constructor(private fb: FormBuilder,
              private _firebase: FirebaseService,
              private _route: ActivatedRoute) {
    this.createForm();
    this.invalidField = false;
    this.matchCount = new Array(9);
    // this.picksgen();
    // this.goles = Array.from(new Array(9), (x,i) => i+1);
  }

  ngOnInit() {
    this._route.params.subscribe(params => {
      console.log(params);
    });

    this._firebase.getUsers()
      .subscribe((res: IUser[]) => {
        console.log(res);
      });

    this.getUserRoundPicks();
    this.getTournament();
  }

  picksgen(): void {
    this.gamespicks = [
      {'match': '01', 'local': 'Puebla', 'visita': 'Tigres'},
      {'match': '02', 'local': 'Atlas', 'visita': ' Leon'},
      {'match': '03', 'local': 'Cruz Azul', 'visita': ' Tijuana'},
      {'match': '04', 'local': 'Monterrey', 'visita': ' Morelia'},
      {'match': '05', 'local': 'Pachuca', 'visita': ' Pumas'},
      {'match': '06', 'local': 'Necaxa', 'visita': ' Veracruz'},
      {'match': '07', 'local': 'Toluca', 'visita': ' Guadalajara'},
      {'match': '08', 'local': 'Queretaro', 'visita': ' America'},
      {'match': '09', 'local': 'Santos', 'visita': ' Lobos'},
    ];

  }


  // TODO: Limit by one round-pick
  getUserRoundPicks(): void {
    this._firebase
      .getUserRoundPicks('zSy0blPOmOyPFFBqUrZY', 'si6PVSPEeug9UiitsMma', '2Kc6g2NsWHOQUtgNfeD1')
      .valueChanges()
      .subscribe(
        roundPicks => {
          console.log("Rounds"+roundPicks);
          this.userRoundPicks = roundPicks[0];
        }
      );
  }


  getTournament(): void {
    this._firebase
      .getTournamentRounds('i0w7ntnWsmMUC54V2uCo')
      .valueChanges()
      .subscribe(
        tournamentRounds => {
          console.log(tournamentRounds);
          this.tournamentRounds = tournamentRounds;
        }
      );
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

  sendPicks(): void {

  }

  createForm() {
    this.picksForm = this.fb.group({
      local01: [null, Validators.required],
      visita01: [null, Validators.required],
      local02: [null, Validators.required],
      visita02: [null, Validators.required],
      local03: [null, Validators.required],
      visita03: [null, Validators.required],
      local04: [null, Validators.required],
      visita04: [null, Validators.required],
      local05: [null, Validators.required],
      visita05: [null, Validators.required],
      local06: [null, Validators.required],
      visita06: [null, Validators.required],
      local07: [null, Validators.required],
      visita07: [null, Validators.required],
      local08: [null, Validators.required],
      visita08: [null, Validators.required],
      local09: [null, Validators.required],
      visita09: [null, Validators.required],
      userID: ['jdsjjjsdjdjsd'],
    });
  }
}
