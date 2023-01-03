/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
class Todo {
    constructor(title, dueDate, priority) {
        this.title = title
        this.dueDate = dueDate
        this.isChecked = false;
        this.priority = priority
    }
    check() {
        this.isChecked = true;
    }
    uncheck() {
        this.isChecked = false;
    }
}

let toDOList = {
    personal: [],
    work: [],
    grocery: [],
}

let addProject = (projName) => {
    toDOList[projName] = [];
}

addProject("school");
addProject("relationship");
console.log(toDOList);
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBUb2RvIHtcclxuICAgIGNvbnN0cnVjdG9yKHRpdGxlLCBkdWVEYXRlLCBwcmlvcml0eSkge1xyXG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZVxyXG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGVcclxuICAgICAgICB0aGlzLmlzQ2hlY2tlZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eVxyXG4gICAgfVxyXG4gICAgY2hlY2soKSB7XHJcbiAgICAgICAgdGhpcy5pc0NoZWNrZWQgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgdW5jaGVjaygpIHtcclxuICAgICAgICB0aGlzLmlzQ2hlY2tlZCA9IGZhbHNlO1xyXG4gICAgfVxyXG59XHJcblxyXG5sZXQgdG9ET0xpc3QgPSB7XHJcbiAgICBwZXJzb25hbDogW10sXHJcbiAgICB3b3JrOiBbXSxcclxuICAgIGdyb2Nlcnk6IFtdLFxyXG59XHJcblxyXG5sZXQgYWRkUHJvamVjdCA9IChwcm9qTmFtZSkgPT4ge1xyXG4gICAgdG9ET0xpc3RbcHJvak5hbWVdID0gW107XHJcbn1cclxuXHJcbmFkZFByb2plY3QoXCJzY2hvb2xcIik7XHJcbmFkZFByb2plY3QoXCJyZWxhdGlvbnNoaXBcIik7XHJcbmNvbnNvbGUubG9nKHRvRE9MaXN0KTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=