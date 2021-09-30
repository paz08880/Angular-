import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialsModule } from './materials/materials.module';
import { HeaderComponent } from './components/header/header.component';
import { ListsComponent } from './components/lists/lists.component';
import { TodoComponent } from './components/todo/todo.component';
import { NewTodoComponent } from './components/new-todo/new-todo.component';
import { TodoContainerComponent } from './components/todo-container/todo-container.component';
import{MatInputModule} from '@angular/material/input';
import {MatNativeDateModule} from '@angular/material/core';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListsComponent,
    TodoComponent,
    NewTodoComponent,
    TodoContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialsModule,
    FormsModule,
    MatInputModule,
    MatNativeDateModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
