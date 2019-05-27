import { Component, OnInit, ContentChild, AfterContentInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { tap } from 'rxjs/operators';

import { OrderService } from './order.service';
import { CartItem } from '../restaurant-detail/shopping-cart/cart-item.model';
import { Order, OrderItem } from './order.model';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit, AfterContentInit {

	delivery: number = 8;

  orderForm: FormGroup;

  emailPattern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
  
  numberPattern = /^[0-9]*$/;

  orderId: number;

  constructor(
    private orderService: OrderService,
    private router: Router,
    private formBuilder: FormBuilder
    ) { }

  ngOnInit() {
    this.orderForm = this.formBuilder.group({
      name: this.formBuilder.control('', [Validators.required, Validators.minLength(5)]),
      email: this.formBuilder.control('', [Validators.required, Validators.pattern(this.emailPattern)]),
      emailConfirmation: this.formBuilder.control('', [Validators.required, Validators.pattern(this.emailPattern)]),
      logradouro: this.formBuilder.control('', [Validators.required, Validators.minLength(5)]),
      numero: this.formBuilder.control('', [Validators.required, Validators.pattern(this.numberPattern)]),
      complemento: this.formBuilder.control(''),
      payment: this.formBuilder.control('', [Validators.required])
    })
  }
 


  ngAfterContentInit() {
  	//this.input = this.model;
  }

  cartItems(): CartItem[] {
    return this.orderService.cartItems(); 
  }

  increaseQty(item: CartItem) {
    this.orderService.increaseQty(item);
  }

  decreaseQty(item: CartItem) {
    this.orderService.decreaseQty(item);
  }

  remove(item: CartItem) {
    this.orderService.remove(item);
  }

  itemsValue(): number {
    return this.orderService.itemsValue();
  }

  checkOrder(order: Order) {
    order.orderItems = this.cartItems()
      .map((item: CartItem) => new OrderItem(item.quantity, item.menuItem.id));

    this.orderService.checkOrder(order)
      .subscribe((order: Order) => {
        this.orderId = order.id;
        this.router.navigate(['/order-sumary']);
        this.orderService.clear();
      });
  }

  validacao(campo): boolean {
    return this.orderForm.get(campo).touched || this.orderForm.get(campo).dirty;
  }

  emailsEqualsTo(): boolean {
    return this.orderForm.get('email').value === this.orderForm.get('emailConfirmation').value && this.orderForm.get('email').value.length > 0;
  }

  isOrderCompleted(): boolean {
    return this.orderId !== undefined;
  }

}
