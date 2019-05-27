import { Component, OnInit, Input, ContentChild, AfterContentInit } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html'
})
export class InputComponent implements OnInit {

	@Input() errorMessage: string;
  @Input() showTip: boolean;

	//input: any;

	//@ContentChild(NgModel) model: NgModel;

  	constructor() { }

  	ngOnInit() {
  	}

  	/*ngAfterContentInit() {
  		this.input = this.model;

  		if(this.input === undefined) {
  			throw new Error('Esse componente precisa ser usado com uma diretiva ngModel.');
  			
  		}
  	}*/

}
