import { Component, OnInit, ViewChild } from '@angular/core';
import { Form } from '@angular/forms';

@Component({
  selector: 'app-new-todo',
  templateUrl: './new-todo.component.html',
  styleUrls: ['./new-todo.component.scss']
})
export class NewTodoComponent implements OnInit {

  constructor() { }

  @ViewChild("f") form:Form;

  ngOnInit(): void {
  }

  public onNewTodoSubmit(){
    console.log(this.form)
  }

}