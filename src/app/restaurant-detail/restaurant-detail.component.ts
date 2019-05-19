import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { RestaurantsService } from '../restaurants/restaurants.service';
import { Restaurant } from '../restaurants/restaurant/restaurant.model';

@Component({
  selector: 'app-restaurant-detail',
  templateUrl: './restaurant-detail.component.html'
})
export class RestaurantDetailComponent implements OnInit {

	  restaurant: Restaurant;

  	constructor(
      private restaurantsService: RestaurantsService,
  		private activatedRoute: ActivatedRoute
  	) { }

  	ngOnInit() {

      let id: number = this.activatedRoute.snapshot.params['id'];

      this.restaurantsService.getRestaurantById(id).subscribe(restaurant => {this.restaurant = restaurant})

  	}

}
