import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

//components
import { HomeComponent } from './home/home.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';
import { MenuComponent } from './restaurant-detail/menu/menu.component';
import { ReviewsComponent } from './restaurant-detail/reviews/reviews.component';
import { OrderComponent } from './order/order.component';
import { OrderSumaryComponent } from './order-sumary/order-sumary.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './security/login/login.component';


const routes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'login', component: LoginComponent },
	{ path: 'home', component: HomeComponent },

	{ path: 'about', loadChildren: './about/about.module#AboutModule'},

	{ path: 'restaurants', component: RestaurantsComponent },
	{ path: 'restaurants/:id', component: RestaurantDetailComponent,
		children: [
			{ path: '', redirectTo: 'menu', pathMatch: 'full' },
			{ path: 'menu', component: MenuComponent },
			{ path: 'reviews', component: ReviewsComponent }
		] 
	},
	{ path: 'order', loadChildren: './order/order.module#OrderModule' },
	{ path: 'order-sumary', component: OrderSumaryComponent },
	{ path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
