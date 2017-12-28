import { Component, OnInit } from '@angular/core';
import { FirebaseService }   from '../../shared/firebase.service';

import { IUser }             from '../../shared/firebase';

@Component({
  selector: 'app-quiniela-setup',
  templateUrl: './quiniela-setup.component.html',
  styleUrls: ['./quiniela-setup.component.scss']
})
export class QuinielaSetupComponent implements OnInit {

  public users = [] as Array<IUser>;

  constructor(private _firebase: FirebaseService) { }

  ngOnInit() {

  }

  public _searchUser(): void {

    this._firebase.getUsers()
      .subscribe((res: IUser[]) => {

        this.users = res;

      });

  }

}
