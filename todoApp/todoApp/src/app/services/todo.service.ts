import { ITodo } from 'src/app/models/todo.interface';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {


  private mock: ITodo[] = [
    {
      id : 1,
      title: 'Creeper, black-tailed tree',
      description: 'Climacteris melanura',
      isCompleted: false,
      isArchived: false,
      endDate: '11/1/2020',
      selected:true,
    },
    {
      id : 2,
      title: "Genoveva",
      description: "Junonia genoveua",
      isCompleted: false,
      isArchived: false,
      endDate: "5/23/2021",
      selected:false,

    },
    {
      id : 3,
      title: "Madagascar fruit bat",
      description: "Pteropus rufus",
      isCompleted: false,
      isArchived: false,
      endDate: "6/2/2021",
      selected:false,

    },
    {
      id : 4,
      title: "Crested bunting",
      description: "Melophus lathami",
      isCompleted: false,
      isArchived: false,
      endDate: "6/22/2021",
      selected:false,

    },
    {
      id : 5,
      title: "Cottonmouth",
      description: "Agkistrodon piscivorus",
      isCompleted: false,
      isArchived: false,
      endDate: "7/26/2021",
      selected:false,
    }
  ]

  private _todoSubject : BehaviorSubject<Array<ITodo>> = new BehaviorSubject(this.mock);

  private singleTodoSubject:BehaviorSubject<ITodo> = new BehaviorSubject(this.mock[0]);

  constructor() { }

  public getTodos():Observable<Array<ITodo>>{
      return this._todoSubject.asObservable();
  }

  public getSelectedTodo(): Observable<ITodo>{
    return this.singleTodoSubject.asObservable();
  }

  public setSelectedTodo(todo:ITodo){
   this.singleTodoSubject.next(todo)
  }
}
