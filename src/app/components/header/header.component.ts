import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { LoginService }      from '../../shared/login.service';

@Component({
  selector: 'qh-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private _login:  LoginService,
              private _router: Router) { }

  ngOnInit() {
  }

  logout(): void {

    this._login.fbLogout()
      .then(() => {

        this._router.navigate(['login']);

      })
      .catch(err => {
        // TODO Add error catching message
      });

  }

}
