import todoApp from "./index";
import Arrow from "./images/left-arrow.png";
import "./style.css";

let projects = todoApp.projects;

let createHeader = (projName) => {
    let header = document.createElement("header");
    let headerContent = `<div ><img class="arrow" src=${Arrow} alt=""></div>
                <h2 class="project-name">${projName}</h2><div class="add-todo">+</div>`;

    header.innerHTML = headerContent;
    return header;
}
let createTodoListItem = (todoObj, index) => {
    let todoListItem = `

        <li class="to-do" data-index=${index}>
            <form>
                <input type="checkbox" name="" id="checkbox">
                <label for="">${todoObj.title}</label>
            </form>
            <div class="date">${todoObj.dueDate.getFullYear()} ${todoObj.dueDate.getMonth()} ${todoObj.dueDate.getDate()}</div>
            <div class="delete">X</div>
        </li>

    `
    return todoListItem;
}

let displayTodo = (todoObj) => {
    
}

let removeTodo = (project, todoListItem) => {
    let index = todoListItem.dataset.index;
    todoApp.deleteToDo(index, project.id);
    project.removeChild(todoListItem)

}

export default function displayProject(e) {
    let container = document.querySelector(".container")
    container.innerHTML = "";

    let projName = e.target.id;
    let header = createHeader(projName);
    let todoList = document.createElement("ul");
    todoList.id = projName;

    for (let index = 0; index < projects[projName].length; index++) {
        todoList.innerHTML += createTodoListItem(projects[projName][index], index);
    }


    container.appendChild(header);
    container.appendChild(todoList)
}

export { createTodoListItem, removeTodo }