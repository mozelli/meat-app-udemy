import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { trigger, state, style, transition, animate } from '@angular/animations';

import { Restaurant } from './restaurant/restaurant.model';
import { RestaurantsService } from './restaurants.service';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  animations: [
  	trigger('toggleSearch', [
  		state('hidden', style({
  			opacity: 0,
  			"max-height": "0px"
  		})),
  		state('visibe', style({
  			opacity: 1,
  			"max-height": "70px",
  			"margin-top": "20px"
  		})),
  		//transition('* => *', animate('500ms 0ms ease-in-out'))
  		transition('visible => hidden', animate('500ms 0ms ease-in-out')),
  		transition('hidden => visible', animate('500ms 0ms ease-in-out'))
  		])
  ]
})
export class RestaurantsComponent implements OnInit {

	restaurants: Restaurant[];

	searchForm: FormGroup;
	searchControl: FormControl;

	searchBarState: string = 'hidden'

  	constructor(
  		private restaurantsService: RestaurantsService,
  		private formBuilder: FormBuilder
  		) { }

  	ngOnInit() {
  		this.searchControl = this.formBuilder.control('');

  		this.searchForm = this.formBuilder.group({
  			searchControl: this.searchControl
  		});

  		this.searchControl.valueChanges
  			.pipe(
  				switchMap(searchTerm => 
  					this.restaurantsService.getRestaurants(searchTerm)))
  			.subscribe(restaurants => this.restaurants = restaurants);

  		/*this.searchControl.valueChanges
  			.pipe(
  				switchMap(searchTerm: => {this.restaurants = this.restaurantsService.getRestaurants(searchTerm)})
  			);*/

  		this.restaurantsService.getRestaurants().subscribe(restaurants => this.restaurants = restaurants);

  		//this.restaurants = this.restaurantsService.getRestaurants();
  	}

  	toggleSearch() {
  		this.searchBarState = this.searchBarState === 'hidden'? 'visible' : 'hidden';
  	}

}
