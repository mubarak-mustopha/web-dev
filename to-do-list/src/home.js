import todoApp from "./index";

let projects = todoApp.projects;

export default function displayHomePage() {
    let heading = document.createElement("h1");
    heading.textContent = "TO DO LIST"

    let projectContainer = document.createElement("div");
    projectContainer.classList.add("projects");

    for (const project in projects) {
        projectContainer.innerHTML +=
            `<div class="project" id=${project}>${project.toUpperCase()}</div>`;
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