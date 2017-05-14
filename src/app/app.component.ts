import { Component } from '@angular/core';
import {ToDoRepository} from './models/ToDoRepository'
import {ToDo} from './models/ToDo.model'
@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1>
    <addToDo-app (onAdd)="addTodo($event)"></addToDo-app>
    <listTodos-app [toDoList]="toDoRepository.toDoList" (onDelete)="deleteToDo($event)"></listTodos-app>
  `
})
export class AppComponent { 
  
  name = 'To Do App using Input and Output methods'
  toDoRepository :ToDoRepository
  constructor(){
    this.toDoRepository=new ToDoRepository
  }
  deleteToDo(todo :ToDo){
    this.toDoRepository.removeTodo(todo.title);
  }
  addTodo(toDo :string){
    this.toDoRepository.addTodo(toDo)
  }
}
