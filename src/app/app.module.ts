import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { FormsModule, FormBuilder,Validators } from '@angular/forms';
import { ListTodosComponent } from './listtodos/listtodos.component'
import { AddToDoComponent } from './addtodo/addtodo.component'


@NgModule({
  imports:      [ BrowserModule,FormsModule ],
  declarations: [ AppComponent,ListTodosComponent,AddToDoComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
