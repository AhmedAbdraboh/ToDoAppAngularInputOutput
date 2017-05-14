"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ToDo_model_1 = require("./ToDo.model");
var ToDoRepository = (function () {
    function ToDoRepository() {
        this.toDoList = new Array;
        this.toDoList.push(new ToDo_model_1.ToDo('Watching prison break'), new ToDo_model_1.ToDo('Watching the flash new epsode'), new ToDo_model_1.ToDo('preparing my self for the big day'), new ToDo_model_1.ToDo('Having good night sleep'));
    }
    ToDoRepository.prototype.addTodo = function (todo) {
        if (todo)
            this.toDoList.push(new ToDo_model_1.ToDo(todo));
    };
    ToDoRepository.prototype.removeTodo = function (title) {
        this.toDoList = this.toDoList.filter(function (todo) { return !(todo.title == title); });
    };
    return ToDoRepository;
}());
exports.ToDoRepository = ToDoRepository;
//# sourceMappingURL=ToDoRepository.js.map