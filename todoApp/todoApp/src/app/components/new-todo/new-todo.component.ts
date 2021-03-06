import { MatDialog } from '@angular/material/dialog';
import { ITodo } from 'src/app/models/todo.interface';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TodoService } from 'src/app/services/todo.service';
import { v4 as uuidv4 } from 'uuid';
@Component({
  selector: 'app-new-todo',
  templateUrl: './new-todo.component.html',
  styleUrls: ['./new-todo.component.scss']
})
export class NewTodoComponent implements OnInit {
  @ViewChild("f") form:NgForm;

  constructor(public dialog:MatDialog, private TodoService:TodoService) { }


  ngOnInit(): void {
  }

  public onNewTodoSubmit(){
    //create a new todo object
    //send object to service
      if(this.form.valid){
        const formValues = this.form.form.value;
    const newTodo:ITodo = {
      id: uuidv4(),
      title:formValues.title,
      description:formValues.description,
      isArchived: false,
      isCompleted : false,
      endDate : formValues.date,
      selected : false,
    }
    this.TodoService.addNewTodo(newTodo);
    this.dialog.closeAll();
    console.log(newTodo);

  }

  }

}
