import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NewModel } from 'src/app/model/newModel';
import { NewMovie } from 'src/app/model/newMovie';
import { MovieService } from 'src/app/service/movie.service';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css'],
})
export class AddMovieComponent implements OnInit {
  initialMovies!: NewMovie[];
  id: number = 0;
  newModel: NewModel = {
    id:0,
    moviename: '',
    category: 'Thriller',
    img: '',
    price: 0,
  };

  constructor(
    private router: Router,
    private movieService: MovieService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.newModel.id = this.route.snapshot.params['id'];
    // this.getAllMovies();
  }

  addMovie() {
    // this.movieService.addMovie(this.newMovie);
    if(this.newModel.id===0){
    console.log(this.newModel);
    this.movieService.addMovie(this.newModel).subscribe({
      next: (response: any) => {
        console.log(response);
        this.router.navigate(['/']);
      },
      error: (error: any) => {
        console.log(error);
      },
    });
  }
  else{
    this.movieService.update(this.newModel).subscribe({
      next: (response: any) => {
        console.log(response);
        this.router.navigate(['/']);
      },
      error: (error: any) => {
        console.log(error);
      },
    });
   }
  }

}
