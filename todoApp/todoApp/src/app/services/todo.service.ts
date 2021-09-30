import { ITodo } from 'src/app/models/todo.interface';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {


  private mock: ITodo[] = [
    {
      title: 'Creeper, black-tailed tree',
      description: 'Climacteris melanura',
      isCompleted: false,
      isArchived: false,
      endDate: '11/1/2020',
    },
    {
      title: "Genoveva",
      description: "Junonia genoveua",
      isCompleted: false,
      isArchived: false,
      endDate: "5/23/2021",
    },
    {
      title: "Madagascar fruit bat",
      description: "Pteropus rufus",
      isCompleted: false,
      isArchived: true,
      endDate: "6/2/2021",
    },
    {
      title: "Crested bunting",
      description: "Melophus lathami",
      isCompleted: false,
      isArchived: false,
      endDate: "6/22/2021",
    },
    {
      title: "Cottonmouth",
      description: "Agkistrodon piscivorus",
      isCompleted: false,
      isArchived: true,
      endDate: "7/26/2021",
    }
  ]

  private _todoSubject : BehaviorSubject<Array<ITodo>> = new BehaviorSubject(this.mock);



  constructor() { }

  public getTodos():Observable<Array<ITodo>>{
      return this._todoSubject.asObservable();
  }

}
