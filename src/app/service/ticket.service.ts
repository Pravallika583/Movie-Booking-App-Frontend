import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor(private http:HttpClient) { }

  // bookticket(ticket:any){
  //   return this.http.post(`http://localhost:9091/api/auth/ticket-booking`,ticket);
  // }

  addbooking(ticket:any){
    return this.http.post(`http://localhost:9091/api/ticket/ticket-booking`,ticket);
  }

  getAllBookings() {
    return this.http.get(`http://localhost:9091/api/ticket/all`);
  }
}
