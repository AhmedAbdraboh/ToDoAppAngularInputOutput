import {ToDo} from "./ToDo.model"

export class ToDoRepository{
    toDoList :ToDo[]=new Array;
    constructor(){
    this.toDoList.push(new ToDo('Watching prison break'),new ToDo('Watching the flash new epsode'),new ToDo('preparing my self for the big day'),new ToDo('Having good night sleep'))
  }
  addTodo(todo :string){
    if(todo)
      this.toDoList.push(new ToDo(todo));
  }
  removeTodo(title:string){
    this.toDoList=this.toDoList.filter(todo=>!(todo.title==title))
  }

}