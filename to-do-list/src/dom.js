import todoApp from "./index";
import displayHomePage from "./home";
import displayProject from "./project";
import createForm from "./form";
import { displayForm, getFormValues } from "./form";
import { createTodoListItem, removeTodo } from "./project";
import { addToProjContainer } from "./home";

let localStorage = window.localStorage;
let projects = localStorage.getItem("projects");

if (projects) {
    todoApp.projects = JSON.parse(projects)
} else {
    localStorage.setItem("projects", JSON.stringify(todoApp.projects))
}

console.log(todoApp.projects);

let container = document.querySelector(".container")

let form = createForm();
document.body.appendChild(form)

displayHomePage(todoApp.projects);

//local storage update
function updateLocalStorage() {
    localStorage.projects = JSON.stringify(todoApp.projects);
}

//click event handler
container.addEventListener("click", (e) => {
    let classList = e.target.classList;

    if (classList.contains("project")) {
        let projName = e.target.id;
        displayProject(todoApp.projects[projName], projName);
    } else if (classList.contains("add-project")) {
        let newProj = prompt("Type In project Name");
        todoApp.addProject(newProj);
        updateLocalStorage();
        addToProjContainer(newProj);
        console.log(todoApp.projects)
    } else if (classList.contains("arrow")) {
        displayHomePage(todoApp.projects);
    } else if (classList.contains("add-todo")) {
        displayForm();
        updateLocalStorage();
        console.log(todoApp.projects)
    } else if (classList.contains("delete")) {
        let project = document.querySelector("ul");
        let li = e.target.parentElement;
        removeTodo(project, li);
        updateLocalStorage();
    } else if (e.target.id = "checkbox") {
        let project = document.querySelector("ul");
        let li = e.target.parentElement.parentElement;
        todoApp.markAsDone(project.id, li.dataset.index);
        updateLocalStorage();
    }
});


//form handler
document.addEventListener("DOMContentLoaded", () => {
    let form = document.querySelector(".form form");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        let { task, dueDate, priority } = getFormValues();
        let todo = todoApp.createTodo(task, dueDate, priority);
        let todoList = document.querySelector("ul");
        let project = todoList.id;
        let todoListItem = createTodoListItem(
            todo, todoApp.projects[project].length);
        console.log(todoListItem);
        todoList.innerHTML += todoListItem;
        todoApp.addTodo(project, todo);
        updateLocalStorage();
        setTimeout(() => {
            form.parentElement.classList.remove("slide");
        }, 1000)
    })
})