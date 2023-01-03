import createHeader from "./header";
import createHomePage from "./home";
import createFooter from "./footer";
import createMenuPage from "./menu";
import createContactPage from "./contact";
import "./style.css";


let header = createHeader();
let main = document.createElement("main");
let footer = createFooter();




//append header to dom
document.body.appendChild(header);


//append to main
let homeLink = document.querySelector("#home");
let menuLink = document.querySelector("#menu");
let contactLink = document.querySelector("#contact");

homeLink.addEventListener("click", () => {
    main.appendChild(createHomePage(main));
})

menuLink.addEventListener("click", () => {
    main.appendChild(createMenuPage(main))
})

contactLink.addEventListener("click", () => {
    main.appendChild(createContactPage(main))
})
main.appendChild(createHomePage(main));

//append main to dom
document.body.appendChild(main)

//append footer to dom
document.body.appendChild(footer);