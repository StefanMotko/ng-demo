import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MovieEntryComponent } from './movie-entry/movie-entry.component';
import { MoviesComponent } from './movies/movies.component';
import { MovieService } from './movie.service';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { HttpClientModule } from '@angular/common/http';

import { Movie } from './model/Movie';
import { MovieShort } from './model/movie-short';
import { MovieResponse } from './model/movie-response';

@NgModule({
  declarations: [
    AppComponent,
    MovieEntryComponent,
    MoviesComponent,
    MovieDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    MovieService
  ],
  exports: [Movie, MovieShort, MovieResponse],
  bootstrap: [AppComponent]
})
export class AppModule { }
