import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Restaurant } from './restaurant/restaurant.model';
import { RestaurantsService } from './restaurants.service';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html'
})
export class RestaurantsComponent implements OnInit {

	restaurants: Observable<Restaurant[]>;

  	constructor(
  		private restaurantsService: RestaurantsService
  		) { }

  	ngOnInit() {
  		this.restaurants = this.restaurantsService.getRestaurants();
  	}

}
