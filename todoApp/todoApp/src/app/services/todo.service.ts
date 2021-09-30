import { ITodo } from 'src/app/models/todo.interface';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private todos: Array<ITodo> = [];


  private _todoSubject : BehaviorSubject<Array<ITodo>> = new BehaviorSubject(
    this.todos
    );

  private singleTodoSubject:BehaviorSubject<ITodo> = new BehaviorSubject(
    this.todos.length ? this.todos[0]: null
    );

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

  public addNewTodo(newTodo:ITodo): void{
    //take exiting todos
    //add new todo to exist todos
    //trigger next tic in obs
    const exitistingTodos: Array<ITodo> = this._todoSubject.value;
    exitistingTodos.push(newTodo);
    this._todoSubject.next(exitistingTodos);
  }
}
