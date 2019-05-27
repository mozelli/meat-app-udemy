import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';
import { User } from './user.model';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

	user: User

  constructor(
  	private httpClient: HttpClient
  	) { }

  isLogged(): boolean {
  	return this.user !== undefined;
  }


  login(email: string, password: string) {
  	return this.httpClient.post<User>(`${environment.API}login`, {email, password})
  		.pipe(
  			tap(user => this.user = user)
  		);
  }
}
