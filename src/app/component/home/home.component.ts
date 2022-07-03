import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewMovie } from 'src/app/model/newMovie';
import { MovieService } from 'src/app/service/movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  movies!: NewMovie[]; 

  constructor(private router: Router, private movieService: MovieService) { }

  ngOnInit(): void {
   this.getallMovies();
  }
  getallMovies(){
   this.movieService.getAllMovies().subscribe({
    next: (response: any) => {
      this.movies = response;
      console.log(response);
    },
    error: (error) => {
      console.log(error);
    },
   });
  }
  
 

}
