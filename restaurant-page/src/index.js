import createHeader from "./header";
import createHomePage from "./home";
import "./style.css";


let header = createHeader();
let main = document.createElement("main");
let footer = document.createElement("footer");




//append header to dom
document.body.appendChild(header);

//append to main
main.appendChild(createHomePage(main));

//append main to dom
document.body.appendChild(main)