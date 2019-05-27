import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Components
import { OrderComponent } from './order.component';
import { OrderItemsComponent } from './order-items/order-items.component';
import { DeliveryCostsComponent } from './delivery-costs/delivery-costs.component';

//Guards
import { LeaveOrderGuard } from './leave-order.guard';

//Modules
import { SharedModule } from '../shared/shared.module';

const ROUTES: Routes = [
	{ path: '', component: OrderComponent, canDeactivate: [LeaveOrderGuard] }
];

@NgModule({
  	declarations: [
  		OrderComponent,
  		OrderItemsComponent,
  		DeliveryCostsComponent
	],
  	imports: [
    	SharedModule,
    	RouterModule.forChild(ROUTES)
  	]
})
export class OrderModule { }
