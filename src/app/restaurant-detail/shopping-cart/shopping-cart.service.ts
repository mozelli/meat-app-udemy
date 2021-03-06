import { Injectable } from '@angular/core';

import { CartItem } from './cart-item.model';
import { MenuItem } from '../menu-item/menu-item.model';
import { NotificationService } from '../../shared/messages/notification.service';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

	items: CartItem[] = [];

  	constructor(
       private notificationService: NotificationService
      ) { }

  	clear() {
  		this.items = [];
  	}

  	addItem(item: MenuItem) {
  		let foundItem = this.items.find((mItem) => mItem.menuItem.id === item.id)

  		if(foundItem) {
  			this.increaseQty(foundItem);

  		}else {
  			this.items.push(new CartItem(item))
  		}

      this.notificationService.notify(`Item ${item.name} adicionado.`);
  	}

  	removeItem(item: CartItem) {
  		this.items.splice(this.items.indexOf(item), 1);

      this.notificationService.notify(`Item ${item.menuItem.name} removido.`);
  	}

  	total(): number {
  		return this.items.map(item => item.value()).reduce((prev, value) => prev + value, 0);
  	}

    increaseQty(item: CartItem) {
      item.quantity++;
    }

    decreaseQty(item: CartItem) {
      item.quantity--;
    }
}
