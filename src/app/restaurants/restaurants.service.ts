import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { catchError, map, tap } from 'rxjs/operators';

import { Restaurant } from './restaurant/restaurant.model';
import { MenuItem } from '../restaurant-detail/menu-item/menu-item.model';
import { ErrorHandler } from '../shared/errorHandler';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class RestaurantsService {

	restaurants: Restaurant[];
	private readonly API = `${environment.API}`;

  	constructor(
  		private http: HttpClient
  		) { }

  	getRestaurants(): Observable<Restaurant[]> {
      return this.http.get<Restaurant[]>(`${this.API}restaurants`)
          .pipe(
            catchError(ErrorHandler.handleError),
            take(1)
        );
  	}

    getRestaurantById(id: number): Observable<Restaurant> {
      return this.http.get<Restaurant>(`${this.API}restaurants/${id}`)
        .pipe(
          catchError(ErrorHandler.handleError)
          );
    }

    getReviewsOfRestaurants(id: number): Observable<any> {
      return this.http.get<any>(`${this.API}restaurants/${id}/reviews`)
        .pipe(
          catchError(ErrorHandler.handleError)
          );
    }

    getMenuOfRestaurant(id: number) : Observable<MenuItem[]> {
      return this.http.get<MenuItem[]>(`${this.API}restaurants/${id}/menu`)
        .pipe(
          catchError(ErrorHandler.handleError)
          );
    }
}
