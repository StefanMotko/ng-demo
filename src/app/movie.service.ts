import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Movie } from './model/Movie';
import { Comment } from './model/Comment';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';


@Injectable()
export class MovieService {

  constructor() { }

  private storage: { [id: string]: Comment[] } = {};

  public getMovies(): Observable<Movie[]> {
    return Observable.of([
        {
            "adult": false,
            "backdrop_path": "/hbn46fQaRmlpBuUrEiFqv0GDL6Y.jpg",
            "belongs_to_collection": {
                "id": 86311,
                "name": "The Avengers Collection",
                "poster_path": "/qJawKUQcIBha507UahUlX0keOT7.jpg",
                "backdrop_path": "/zuW6fOiusv4X9nnW3paHGfXcSll.jpg"
            },
            "budget": 220000000,
            "genres": [{
                "id": 878,
                "name": "Science Fiction"
            }, {
                "id": 28,
                "name": "Action"
            }, {
                "id": 12,
                "name": "Adventure"
            }],
            "homepage": "http://marvel.com/avengers_movie/",
            "id": 24428,
            "imdb_id": "tt0848228",
            "original_language": "en",
            "original_title": "The Avengers",
            "overview": "When an unexpected enemy emerges and threatens global safety and security, Nick Fury, director of the international peacekeeping agency known as S.H.I.E.L.D., finds himself in need of a team to pull the world back from the brink of disaster. Spanning the globe, a daring recruitment effort begins!",
            "popularity": 67.93263899999999,
            "poster_path": "/cezWGskPY5x7GaglTTRN4Fugfb8.jpg",
            "production_companies": [{
                "id": 420,
                "logo_path": "/hUzeosd33nzE5MCNsZxCGEKTXaQ.png",
                "name": "Marvel Studios",
                "origin_country": "US"
            }],
            "production_countries": [{
                "iso_3166_1": "US",
                "name": "United States of America"
            }],
            "release_date": "2012-04-25",
            "revenue": 1519557910,
            "runtime": 143,
            "spoken_languages": [{
                "iso_639_1": "en",
                "name": "English"
            }],
            "status": "Released",
            "tagline": "Some assembly required.",
            "title": "The Avengers",
            "video": false,
            "vote_average": 7.5,
            "vote_count": 13829
        }
    ]);
  }

  public getMovie(movieId: number): Observable<Movie> {
      return this.getMovies().map(([ movie ]) => movie);
  }

  public saveComment(movieId: number, comment: Comment) {
      if (Array.isArray(this.storage[movieId])) {
          this.storage[movieId].push(comment);
      } else {
          this.storage[movieId] = [ comment ];
      }
  }

  public getComments(movieId: number): Observable<Comment[]> {
      return Observable.of(this.storage[movieId]);
  }

}
