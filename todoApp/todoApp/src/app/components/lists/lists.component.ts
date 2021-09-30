import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ITodo } from 'src/app/models/todo.interface';
import { TodoService } from 'src/app/services/todo.service'
@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss']
})
export class ListsComponent implements OnInit, OnDestroy {

  constructor(private TodoService: TodoService) { }

  public todos: Array<ITodo> = [];

  private subscription: Subscription = new Subscription();

  ngOnInit(): void {
      this.subscription.add(
          this.TodoService.getTodos().subscribe(data => {
            this.todos = data;
          })
      )
  }
  ngOnDestroy(){
  this.subscription.unsubscribe();
  }


  };





