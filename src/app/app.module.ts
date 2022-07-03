import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { HomeComponent } from './component/home/home.component';
import { FormsModule } from '@angular/forms';
import { AddMovieComponent } from './component/add-movie/add-movie.component';
import { CardComponent } from './component/card/card.component';
import { PaymentComponent } from './component/payment/payment.component';
import { TicketBookingComponent } from './component/ticket-booking/ticket-booking.component';
import { HttpClientModule } from '@angular/common/http';
import { BookingHistoryComponent } from './component/booking-history/booking-history.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    AddMovieComponent,
    CardComponent,
    PaymentComponent,
    TicketBookingComponent,
    BookingHistoryComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
