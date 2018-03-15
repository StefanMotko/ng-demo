import { Component, OnInit, Input } from '@angular/core';
import { MovieShort } from '../model/movie-short';

@Component({
  selector: 'app-movie-entry',
  templateUrl: './movie-entry.component.html',
  styleUrls: ['./movie-entry.component.css']
})
export class MovieEntryComponent implements OnInit {

  @Input()
  movie: MovieShort;

  constructor() { }

  ngOnInit() {
  }

  public voteColor(): string {
    return `rgb(${Math.round(255 * (10 - this.movie.vote_average) / 10)}, ${Math.round(255 * this.movie.vote_average / 10)}, 0)`;
  }

}
