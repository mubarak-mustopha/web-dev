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
main.appendChild(createContactPage(main));

//append main to dom
document.body.appendChild(main)

//append footer to dom
document.body.appendChild(footer);