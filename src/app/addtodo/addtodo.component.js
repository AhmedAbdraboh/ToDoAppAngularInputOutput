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
var AddToDoComponent = (function () {
    function AddToDoComponent() {
        this.onAdd = new core_1.EventEmitter();
    }
    AddToDoComponent.prototype.addToDo = function (title) {
        if (title) {
            this.onAdd.emit(title);
        }
    };
    return AddToDoComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], AddToDoComponent.prototype, "onAdd", void 0);
AddToDoComponent = __decorate([
    core_1.Component({
        selector: 'addToDo-app',
        templateUrl: './addtodo.component.html'
    })
], AddToDoComponent);
exports.AddToDoComponent = AddToDoComponent;
//# sourceMappingURL=addtodo.component.js.map