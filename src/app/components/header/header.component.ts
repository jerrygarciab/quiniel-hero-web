import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { LoginService }      from '../../shared/login.service';

@Component({
  selector: 'qh-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public linksmap: Array<any>;
  constructor(private _login:  LoginService,
              private _router: Router) { 
                this.linksmap = [
                  { "href":"/my-picks", "display":"Mis Picks"},
                  { "href":"/realtime", "display":"Tiempo Real"},
                  { "href":"/overallpoints", "display":"Acumulado del Torneo"},
//                  { "href":"/mypicks", "display":"Administrar"},
                  { "href":"/invite-friends", "display":"Invitar Amigos"},
                  { "href":"/quiniela-setup", "display":"Crear Quiniela"},
                ];
              }
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
