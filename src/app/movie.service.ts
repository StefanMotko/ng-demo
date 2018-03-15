import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Movie } from './model/Movie';
import 'rxjs/add/observable/of';

@Injectable()
export class MovieService {

  constructor() { }

  public getMovies(): Observable<Movie[]> {
    return Observable.of([
      { 
        original_title: "The Avengers",
        genres: [{
            "id": 878,
            "name": "Science Fiction"
        }, {
            "id": 28,
            "name": "Action"
        }, {
            "id": 12,
            "name": "Adventure"
        }],
        overview: "When an unexpected enemy emerges and threatens global safety and security, Nick Fury, director of the international peacekeeping agency known as S.H.I.E.L.D., finds himself in need of a team to pull the world back from the brink of disaster. Spanning the globe, a daring recruitment effort begins!",
        vote_average: 2.5,
        runtime: 143,
        release_date: "2012-04-25"
      },
      { 
        original_title: "The Avengers",
        genres: [{
            "id": 878,
            "name": "Science Fiction"
        }, {
            "id": 28,
            "name": "Action"
        }, {
            "id": 12,
            "name": "Adventure"
        }],
        overview: "When an unexpected enemy emerges and threatens global safety and security, Nick Fury, director of the international peacekeeping agency known as S.H.I.E.L.D., finds himself in need of a team to pull the world back from the brink of disaster. Spanning the globe, a daring recruitment effort begins!",
        vote_average: 7.5,
        runtime: 143,
        release_date: "2012-04-25"
      }
    ]);
  }

}
