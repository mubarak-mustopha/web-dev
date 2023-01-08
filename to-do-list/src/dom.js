import todoApp from "./index";
import displayHomePage from "./home";
import displayProject from "./project";
import createForm from "./form";
import { displayForm, getFormValues } from "./form";
import { createTodoListItem, removeTodo } from "./project";
import { addToProjContainer } from "./home";




let container = document.querySelector(".container")

let form = createForm();
document.body.appendChild(form)

displayHomePage();

container.addEventListener("click", (e) => {
    let classList = e.target.classList;
    let project = document.querySelector("ul");
    if (classList.contains("project")) {
        displayProject(e);
    } else if (classList.contains("add-project")) {
        let newProj = prompt("Type In project Name");
        todoApp.addProject(newProj);
        addToProjContainer(newProj);

    } else if (classList.contains("arrow")) {
        displayHomePage();
    } else if (classList.contains("add-todo")) {
        displayForm();
    } else if (classList.contains("delete")) {
        let li = e.target.parentElement;
        removeTodo(project, li);
        console.log(todoApp.projects);
    } else if (e.target.id = "checkbox") {
        let li = e.target.parentElement.parentElement;
        todoApp.markAsDone(project.id, li.dataset.index);
        console.log(todoApp.projects);
    }
});

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
        console.log(todoApp.projects);
        setTimeout(() => {
            form.parentElement.classList.remove("slide");
        }, 1000)
    })
})