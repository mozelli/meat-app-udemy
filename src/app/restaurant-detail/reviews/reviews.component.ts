import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

import { RestaurantsService } from '../../restaurants/restaurants.service';
 
@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html'
})
export class ReviewsComponent implements OnInit {

	reviews: Observable<any>;

  constructor(
  	private restaurantsService: RestaurantsService,
  	private activatedRoute: ActivatedRoute
  	) { }

  ngOnInit() {

  	this.reviews = this.restaurantsService
  		.getReviewsOfRestaurants(this.activatedRoute.parent.snapshot.params['id']);

  }

}
