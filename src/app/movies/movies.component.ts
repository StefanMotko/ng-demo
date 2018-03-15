import { Component, OnInit } from '@angular/core';
import { Movie } from '../model/Movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movies: Movie[];

  constructor(public movieService: MovieService) { }

  ngOnInit() {
      this.getMovies();
  }

  getMovies() {
      this.movieService.getMovies().subscribe(movies => { this.movies = movies; });
  }

}
