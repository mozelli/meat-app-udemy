import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { trigger, state, style, transition, animate } from '@angular/animations';


import { RestaurantsService } from '../../restaurants/restaurants.service';
import { MenuItem } from '../menu-item/menu-item.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  animations: [
    trigger('itemsAppeared', [
      state('ready', style({opacity: 1})),
      transition('void  => ready', [
        style({opacity: 0, transform: 'translate(0px, -20px)'}),
        animate('500ms 0ms ease-in')
      ])
    ])
  ]
})
export class MenuComponent implements OnInit {

	menu: Observable<MenuItem[]>;

    menuItemState: string = 'ready';

  	constructor(
  		private restaurantsService: RestaurantsService,
  		private acrivatedRoute: ActivatedRoute
  		) { }

  	ngOnInit() {
  		this.menu = this.restaurantsService.getMenuOfRestaurant(
  			this.acrivatedRoute.parent.snapshot.params['id']
  			);
  	}

    addMenuItem(item: MenuItem) {
      console.log(item);
    }

}
