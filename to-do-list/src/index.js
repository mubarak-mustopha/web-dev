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

let projects = {
    personal: [],
    work: [],
    grocery: [],
}

let addProject = (projName) => {
    projects[projName] = [];
}

let addTodo = (project, toDoObj) => {
    projects[project].push(toDoObj);
}

let createTodo = (task, dueDate, priority) => new Todo(task, dueDate, priority);

let markAsDone = (project, toDoIndex) => {
    projects[project][toDoIndex].check();
}

let deleteToDo = (toDoIndex, project) => {
    projects[project].splice(toDoIndex, 1)
}

let replaceTodo = (newToDo, project, toDoIndex) => {
    projects[project][toDoIndex] = newToDo;
}

let editTodo = (newToDo, project, toDoIndex) => {
    replaceTodo(newToDo, project, toDoIndex);
}

addProject("school");
addProject("relationship");
let read = createTodo("read", new Date("2023-02-11"), 5);
let stayHalal = createTodo("stayHalal", new Date(), 10)
let keepItReal = createTodo("Never cheate", new Date(), 5)

addTodo("school", read);
addTodo("relationship", stayHalal);
addTodo("relationship", keepItReal);

markAsDone("school", 0)
//deleteToDo(0, "relationship")
editTodo(createTodo("study", new Date("2023-02-11"), 5), "school", 0)

//console.log(projects.school);
//console.log(projects.relationship);
let todoApp = {
    projects, addProject, addTodo, createTodo, markAsDone
    , deleteToDo, editTodo
}

export default todoApp;