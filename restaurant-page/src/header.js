import Logo from "./images/logo.jpeg";
import "./style.css";


function createLogo() {
    let logoDiv = document.createElement("div");
    logoDiv.classList.add("logo");

    let logoImg = new Image();
    logoImg.src = Logo;
    logoDiv.appendChild(logoImg);

    let logoText = document.createElement("span");
    logoText.textContent = "Muby's Doughnot";
    logoDiv.appendChild(logoText);
    return logoDiv
}

function createNav() {
    let navList = document.createElement("ul");
    navList.classList.add("nav");

    //home list
    let homeLi = document.createElement("li");
    homeLi.setAttribute("id", "home");
    let homeLink = createLinkTag("Home", "#");
    homeLi.appendChild(homeLink);

    //menu list
    let menuLi = document.createElement("li");
    menuLi.setAttribute("id", "menu");
    let menuLink = createLinkTag("Menu", "#");
    menuLi.appendChild(menuLink);

    //Contact list
    let contactLi = document.createElement("li");
    contactLi.setAttribute("id", "contact");
    let contactLink = createLinkTag("Contact", "#");
    contactLi.appendChild(contactLink);

    navList.appendChild(homeLi);
    navList.appendChild(menuLi);
    navList.appendChild(contactLi)

    return navList;
}

function createLinkTag(text, href) {
    let link = document.createElement("a");
    link.textContent = text;
    link.href = href;
    return link
}

//append to header

export default function createHeader() {
    let header = document.createElement("header");
    header.append(createLogo());
    header.append(createNav());
    return header;
}