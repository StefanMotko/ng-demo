import MovieShort from './movie-short';

export class MovieResponse {
    page: number;
    results: MovieShort[];
    totalPages: number;
    totalResults: number;

}