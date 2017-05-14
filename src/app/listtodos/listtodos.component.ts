import {Component,Input,Output,EventEmitter} from '@angular/core'
import { ToDo } from '../models/ToDo.model'

@Component({
    selector:'listTodos-app',
    templateUrl:'./listtodos.component.html'
})

export class ListTodosComponent{
    showAll :boolean=false
    @Input('toDoList') toDoList :ToDo[]
    @Output() onDelete = new EventEmitter();

    getTodos(){
    if(this.showAll)
      return this.toDoList
    else
      return this.toDoList.filter(todo=>!todo.done)
  }

  deleteTodo(todo :ToDo){
      this.onDelete.emit(todo)
  }
  
}