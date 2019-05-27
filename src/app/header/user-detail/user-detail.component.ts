import { Component, OnInit } from '@angular/core';

import { LoginService } from '../../security/login/login.service';
import { User } from '../../security/login/user.model';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html'
})
export class UserDetailComponent implements OnInit {

  constructor(
  	private loginService: LoginService
  	) { }

  ngOnInit() {
  }

  user(): User {
  	return this.loginService.user;
  }

  isLoggedIn(): boolean {
  	return this.loginService.isLogged();
  }

  login() {
  	this.loginService.handleLogin();
  }

  logout() {
  	this.loginService.logout();
  }

}
