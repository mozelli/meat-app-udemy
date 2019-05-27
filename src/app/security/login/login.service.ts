import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, NavigationEnd } from '@angular/router';

import { environment } from '../../../environments/environment';
import { User } from './user.model';
import { tap, filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

	user: User;
  lastUrl: string;

  constructor(
  	private httpClient: HttpClient,
    private router: Router
  	) {
    this.router.events
      .pipe(filter(e => e instanceof NavigationEnd))
      .subscribe((e: NavigationEnd) => this.lastUrl = e.url);
  }

  isLogged(): boolean {
  	return this.user !== undefined;
  }

  handleLogin(path: string = this.lastUrl) {
    this.router.navigate(['/login', btoa(path)]);
  }


  login(email: string, password: string) {
  	return this.httpClient.post<User>(`${environment.API}login`, {email, password})
  		.pipe(
  			tap(user => this.user = user)
  		);
  }

  logout() {
    this.user = undefined;
  }
}
