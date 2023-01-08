import todoApp from "./index";
import "./style.css";

let projects = todoApp.projects;

let createCountDiv = (project) => {//project name: arg
    let countDiv = document.createElement("div");
    countDiv.classList.add("count");
    countDiv.textContent = projects[project].length;
    return countDiv;
}

let createProjectDiv = (project) => {//project name: arg
    let projectDiv = document.createElement("div");

    let countDiv = createCountDiv(project);
    projectDiv.appendChild(countDiv);

    let projDivText = document.createElement("div");
    projDivText.textContent = project.toUpperCase();//projectname
    projectDiv.appendChild(projDivText)

    projectDiv.classList.add("project");
    projectDiv.id = project;

    return projectDiv;
}

let addToProjContainer = (project) => {//project name: arg
    let projectContainer = document.querySelector(".projects");
    let projDiv = createProjectDiv(project);
    let addProjectDiv = document.querySelector(".add-project");
    projectContainer.insertBefore(projDiv, addProjectDiv);
}


export default function displayHomePage() {
    let heading = document.createElement("h1");
    heading.textContent = "TO DO LIST"

    let projectContainer = document.createElement("div");
    projectContainer.classList.add("projects");

    let addProjectDiv = document.createElement("div");
    addProjectDiv.classList.add("add-project");
    addProjectDiv.textContent = "+";
    projectContainer.appendChild(addProjectDiv);

    for (const project in projects) {
        projectContainer.insertBefore(createProjectDiv(project), addProjectDiv)
    }


    let container = document.querySelector(".container");
    container.innerHTML = "";

    container.appendChild(heading);
    container.appendChild(projectContainer);
    console.log(projectContainer.children);
    //    for (let project of projectContainer.children) {
    //        project.addEventListener("click", (e) => displayProject(e))
    //    }
}

export { addToProjContainer }