import { Component, Input, OnDestroy, OnInit } from '@angular/core';
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

  @Input() todos: Array<ITodo> = [];


  ngOnInit(): void {

  }
  ngOnDestroy(){
  }

    public onTodoClick(todo:ITodo, index:number){
      this.TodoService.setSelectedTodo(todo);
      this.todos.forEach(todo => {
        if(todo.selected){
          todo.selected = false;
        }
      })
      this.todos[index].selected = true;
    }

  };





