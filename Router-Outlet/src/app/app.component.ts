import { DataService } from './service/data.service';
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Movie } from './models/movie.model';
import { switchMap } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit  {
   movie$!:Observable<Movie | null>;

    private id$ = new BehaviorSubject<string>('');

    constructor(private dataService:DataService) {}
  ngOnInit(): void {
    this.movie$ = this.id$.pipe(
      switchMap(id => this.dataService.getMovieById(id))
    )  }



  search(id: string){
      this.id$.next(id)
  }


}
