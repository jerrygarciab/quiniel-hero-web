import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';

import {ActivatedRoute} from '@angular/router';
import {FirebaseService} from '../../shared/firebase.service';

import {IMatch, IRoundPick, IUser} from '../../shared/firebase';

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
  public matches: IMatch[] = [];

  public tournamentkey: string = 'i0w7ntnWsmMUC54V2uCo';
  public roundkey: string = 'iOuqyd3iiKUh1dcVxAhX';

  constructor(private fb: FormBuilder,
              private _firebase: FirebaseService,
              private _route: ActivatedRoute) {
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

    this.getUserRoundPickMatches();
    this.getTournament();
    this.createForm();
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
  getUserRoundPickMatches(): void {
    this._firebase
      .getUserRoundPicksMatches('zSy0blPOmOyPFFBqUrZY', 'si6PVSPEeug9UiitsMma', 'ZNip81NlJeCzEHAUKmzL')
      .valueChanges()
      .subscribe(
        (matches: IMatch[]) => {
          console.log('Matches %o', matches);
          this.matches = matches;
          this.createForm();
        }
      );
  }


  getTournament(): void {
    this._firebase
      .getTournamentRounds(this.tournamentkey)
      .valueChanges()
      .subscribe(
        tournamentRounds => {
          console.log('Tournament Rounds: %o', tournamentRounds);
          this.tournamentRounds = tournamentRounds;
        }
      );
  }


  savePicksInformation(post): void {

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
    this.picksForm = this.fb.group(this.formFields());
  }

  formFields() {
    let empArr = {};
    for (let match of this.matches) {
      empArr[`${match.matchid}_localscore`] = [match.localscore, [Validators.required]];
      empArr[`${match.matchid}_visitorscore`] = [match.visitorscore, [Validators.required]];
    }
    console.log(empArr);
    return empArr;
  }
}
