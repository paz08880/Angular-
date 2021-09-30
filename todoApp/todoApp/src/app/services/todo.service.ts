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
    if(!this._todoSubject.value.length) {
      const todosString = localStorage.getItem("todos");
      if(todosString){
        const exitistingTodos = JSON.parse(todosString)
        exitistingTodos[0].selected = true;
        this._todoSubject.next(exitistingTodos);
        this.singleTodoSubject.next(exitistingTodos[0]);
      }
    }
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
    localStorage.setItem("todos",JSON.stringify(exitistingTodos));
  }

  public onTodoAction(todoId: string, action: string):void{
    const existingTodos: Array<ITodo> = this._todoSubject.value;

    const todoIndex = existingTodos.findIndex(singleTodo => singleTodo.id ,todoId);
    existingTodos[todoIndex][action] = true;
    this._todoSubject.next(existingTodos);
    localStorage.setItem("todos",JSON.stringify(existingTodos));

  }



}
