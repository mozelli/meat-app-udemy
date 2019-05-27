import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map, catchError } from 'rxjs/operators';

import { ShoppingCartService } from '../restaurant-detail/shopping-cart/shopping-cart.service';
import { CartItem } from '../restaurant-detail/shopping-cart/cart-item.model';
import { Order, OrderItem } from './order.model';
import { ErrorHandler } from '../shared/errorHandler';
import { LoginService } from '../security/login/login.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private API = `${environment.API}`;

  	constructor(
  		private shoppingCartService: ShoppingCartService,
      private http: HttpClient,
      private loginService: LoginService
  		) { }


  	cartItems(): CartItem[] {
  		return this.shoppingCartService.items;
  	}

  	increaseQty(item: CartItem) {
  		this.shoppingCartService.increaseQty(item);
  	}

  	decreaseQty(item: CartItem) {
  		this.shoppingCartService.decreaseQty(item);

	    if(item.quantity === 0) {
			this.shoppingCartService.removeItem(item);
		}
  	}

  	remove(item: CartItem) {
  		this.shoppingCartService.removeItem(item);
  	}

    itemsValue(): number {
      return this.shoppingCartService.total();
    }

    checkOrder(order: Order): Observable<Order> {
      let headers = new HttpHeaders()

      if(this.loginService.isLogged()) {
        headers = headers.set('Authorization', `Beared ${this.loginService.user.accessToken}`)
      }

      return this.http.post<Order>(`${this.API}orders`, order, {headers: headers})
        .pipe(
          catchError(ErrorHandler.handleError)
          );
    }

    clear() {
      this.shoppingCartService.clear();
    }
}
