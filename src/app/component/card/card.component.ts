import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewMovie } from 'src/app/model/newMovie';
import { Ticketbooking } from 'src/app/model/ticketbooking';
import { AuthService } from 'src/app/service/auth.service';
import { MovieService } from 'src/app/service/movie.service';
import { TicketService } from 'src/app/service/ticket.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() newMovie!: NewMovie;
  count!: number;
  @Input() ticketbooking!: Ticketbooking;
  isAdmin: boolean = false;

  constructor(
    private router: Router,
    private ticketService: TicketService,
    private movieService: MovieService,
    private authService: AuthService,
  ) {}

  ngOnInit(): void {
    this.isAdmin = this.authService.isAdmin();
  }
  // bookticket() {
  //   console.log(this.ticketbooking);
  //   this.ticketService.bookticket(this.ticketbooking).subscribe({
  //     next: (response: any) => {
  //       console.log();
  //     },
  //     error: (error: any) => {
  //       console.log(error);
  //     },
  //   });
  // }

  delete(id: number) {
    this.movieService.delete(id).subscribe({
      next: (response: any) => {
        console.log(response);
        window.location.reload()
      },
      error: (error: any) => console.log(error),
    });
  }
  edit(id: number) {
    this.router.navigate(['/edit', id]);
    // this.movieService.edit(movie).subscribe({
    //   next: (response: any) => {
    //     console.log(response);
    //     window.location.reload()
    //   },
    //   error: (error: any) => console.log(error),
    // });
  }
}
