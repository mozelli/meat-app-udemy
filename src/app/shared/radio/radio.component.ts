import { Component, OnInit, Input } from '@angular/core';

import { ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html'
})
export class RadioComponent implements OnInit, ControlValueAccessor {

	@Input() forLabel: string;
	@Input() label: string;
	@Input() errorMessage: string = "";
	@Input() successMessage: string = "";

	value: any;
	onChange: any;

  constructor() { }

  ngOnInit() {
  }

  writeValue(obj: any): void {
  	this.value = obj;
  }

  registerOnChange(fn: any): void {
  	this.onChange = fn;
  }

  registerOnTouched(fn: any): void {

  }

}
