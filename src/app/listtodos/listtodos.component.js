"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ListTodosComponent = (function () {
    function ListTodosComponent() {
        this.showAll = false;
        this.onDelete = new core_1.EventEmitter();
    }
    ListTodosComponent.prototype.getTodos = function () {
        if (this.showAll)
            return this.toDoList;
        else
            return this.toDoList.filter(function (todo) { return !todo.done; });
    };
    ListTodosComponent.prototype.deleteTodo = function (todo) {
        this.onDelete.emit(todo);
    };
    return ListTodosComponent;
}());
__decorate([
    core_1.Input('toDoList'),
    __metadata("design:type", Array)
], ListTodosComponent.prototype, "toDoList", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ListTodosComponent.prototype, "onDelete", void 0);
ListTodosComponent = __decorate([
    core_1.Component({
        selector: 'listTodos-app',
        templateUrl: './listtodos.component.html'
    })
], ListTodosComponent);
exports.ListTodosComponent = ListTodosComponent;
//# sourceMappingURL=listtodos.component.js.map