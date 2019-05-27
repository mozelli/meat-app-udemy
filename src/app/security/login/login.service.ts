import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { environment } from '../../../environments/environment';
import { User } from './user.model';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

	user: User

  constructor(
  	private httpClient: HttpClient,
    private router: Router
  	) { }

  isLogged(): boolean {
  	return this.user !== undefined;
  }

  handleLogin(path?: string) {
    this.router.navigate(['/login', path]);
  }


  login(email: string, password: string) {
  	return this.httpClient.post<User>(`${environment.API}login`, {email, password})
  		.pipe(
  			tap(user => this.user = user)
  		);
  }
}
