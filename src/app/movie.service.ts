import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Movie } from './model/Movie';
import { MovieShort } from './model/movie-short';
import { MovieResponse } from './model/movie-response';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import { HttpClient,HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable()
export class MovieService {
  
  constructor(private http: HttpClient) { 
  }

  httpParams = {
    params: new HttpParams().set('api_key', '71df36679a0472d74597f58f6fec0185')
  };
  moviedbUrl: String = 'http://api.themoviedb.org/3/movie'

  public getMovies(): Observable<MovieShort[]> {
    const url = `${this.moviedbUrl}/popular`;
    return this.http.get<MovieResponse>(url, this.httpParams)
      .map(movies => movies.results);
  }
  
  public getMovieDetail(filmId: Number): Observable<Movie> {
    const url = `${this.moviedbUrl}/${filmId}`;
    return this.http.get<Movie>(url, this.httpParams);
  }

}
