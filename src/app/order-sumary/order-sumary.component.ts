import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-sumary',
  templateUrl: './order-sumary.component.html'
})
export class OrderSumaryComponent implements OnInit {

	rated: boolean;

  	constructor() { }

  	ngOnInit() {
  	}

  	rate(): void {
  		this.rated = true;
  	}

}
