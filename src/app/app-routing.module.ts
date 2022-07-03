import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMovieComponent } from './component/add-movie/add-movie.component';
import { BookingHistoryComponent } from './component/booking-history/booking-history.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { PaymentComponent } from './component/payment/payment.component';
import { RegisterComponent } from './component/register/register.component';
import { TicketBookingComponent } from './component/ticket-booking/ticket-booking.component';
import { RouterGaurdService } from './service/router-gaurd.service';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent} ,
  { path: 'add', component: AddMovieComponent },
  { path: 'edit/:id', component: AddMovieComponent},
  { path: 'register', component: RegisterComponent },
  {path:'ticket-booking/:id', component:TicketBookingComponent ,canActivate: [RouterGaurdService]},
  {path:'payment', component:PaymentComponent},
  {path:'bookings', component:BookingHistoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
