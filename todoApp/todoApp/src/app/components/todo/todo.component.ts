import { Subscription } from 'rxjs';
import { ITodo } from 'src/app/models/todo.interface';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit,OnDestroy {

  @Input() set todo(todo: ITodo) {
    this._todo = todo;
    console.log(todo);
  }
  get todo() {
    return this._todo;
  }
  private _todo: ITodo;

  constructor(private TodoService: TodoService) {}

  private subscription: Subscription = new Subscription();


  ngOnInit(): void {

  }
  ngOnDestroy():void {
    this.subscription.unsubscribe();

  }

  public onCompleteTodo(todo:ITodo){
    todo.isCompleted = true;
    this.TodoService.onTodoAction(todo.id, "isCompleted");
    }

  public onArchiveTodo(todo:ITodo){
      todo.isArchived = true;
      this.TodoService.onTodoAction(todo.id, "isArchived = true");

      }

}
