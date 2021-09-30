import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from './../models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor() { }

    async getMovieById(id:string): Promise<Movie | null>{
      return 12;
    }

}
