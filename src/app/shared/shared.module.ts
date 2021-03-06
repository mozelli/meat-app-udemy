import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

//Components
import { InputComponent } from './input/input.component';
import { RadioComponent } from './radio/radio.component';
import { RatingComponent } from './rating/rating.component';
import { SnackbarComponent } from './messages/snackbar/snackbar.component';

//Services
import { NotificationService } from './messages/notification.service';
import { LoginService } from '../security/login/login.service';

//Guards
import { LoggedInGuard } from '../security/loggedin.guard';
import { LeaveOrderGuard } from '../order/leave-order.guard';

@NgModule({
  declarations: [
  	InputComponent, 
  	RadioComponent, 
  	RatingComponent, 
    SnackbarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
  ReactiveFormsModule,
  CommonModule,
  InputComponent,
  RadioComponent,
  RatingComponent,
  SnackbarComponent,
  ],
  providers: [
    NotificationService,
    LoginService,
    LoggedInGuard,
    LeaveOrderGuard
  ]
})
export class SharedModule { }
