import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Ticketbooking } from 'src/app/model/ticketbooking';

import { TicketService } from 'src/app/service/ticket.service';

@Component({
  selector: 'app-booking-history',
  templateUrl: './booking-history.component.html',
  styleUrls: ['./booking-history.component.css'],
})
export class BookingHistoryComponent implements OnInit {
  ticketbookings!: Ticketbooking[];
  total: number = 0;
  arr1: Ticketbooking[][] = [];
  arr2: Ticketbooking[] = [];
  arr3: number[] = [];

  constructor(private ticketService: TicketService, private router: Router) {}

  ngOnInit(): void {
    this.getAllbookings();
  }

  getAllbookings() {
    this.ticketService.getAllBookings().subscribe({
      next: (response: any) => {
        console.log(response);

        this.ticketbookings = response;
        this.ticketbookings.forEach((booking) => {
          if (this.arr2.length === 0) {
            console.log(this.arr2.length);
            this.arr2.push(booking);
            this.total+=booking.price*booking.noOfTickets;
          } else if (this.arr2[0].ticketid === booking.ticketid) {
            this.arr2.push(booking);
            this.total+=booking.price*booking.noOfTickets;
          } else {
            this.arr1.push(this.arr2);
            this.arr3.push(this.total);
            this.arr2 = [];
            this.total = 0;
            this.arr2.push(booking);
            this.total+=booking.price*booking.noOfTickets;
          }
        });
        this.arr1.push(this.arr2);
        this.arr3.push(this.total);
        console.log(this.arr1);
      },
      error: (error: any) => console.log(error),
    });
  }
}
