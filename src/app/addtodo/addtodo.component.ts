import {Component,Output,EventEmitter} from '@angular/core'



@Component({
    selector:'addToDo-app',
    templateUrl:'./addtodo.component.html'
})



export class AddToDoComponent{
    @Output() onAdd = new EventEmitter();

    addToDo(title :string){
        if(title){
            this.onAdd.emit(title)
        }
    }
}

