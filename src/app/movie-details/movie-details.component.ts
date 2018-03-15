import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../model/Movie';
import { MovieService } from '../movie.service';
import { ActivatedRoute } from '@angular/router';
import { Comment } from '../model/Comment';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  @Input()
  movieId: number; 
  movie: Movie;
  comments: Comment[];

  newComment: Comment = new Comment();

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService
  ) {
  }

  ngOnInit() {
    this.movieId = +this.route.snapshot.paramMap.get('id');
    this.getMovie();
    this.getComments();
  }

  getMovie() {
    this.movieService.getMovie(this.movieId).subscribe(movie => { this.movie = movie });
  }

  getComments() {
    this.movieService.getComments(this.movieId).subscribe(comments => { this.comments = comments });
  }

  submitComment() {
    this.movieService.saveComment(this.movieId, this.newComment);
    this.newComment = new Comment();
    this.getComments();
  }

}
