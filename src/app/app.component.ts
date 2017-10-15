import { Component, OnInit }                         from '@angular/core';
import { LoginService }                              from './shared/login.service';

@Component({
  selector: 'qh-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor() { }

  accessToken: string;
  fbUserID: string;
  expiresIn: number;

  ngOnInit() { }
}
