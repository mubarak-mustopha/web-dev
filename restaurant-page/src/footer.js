import Insta from "./images/socials/instagram.png";
import Facebook from "./images/socials/facebook.png";
import Email from "./images/socials/email.png";
import "./style.css";

function createSocials() {
    let div = document.createElement("div");
    div.classList.add("socials");

    let insta = new Image();
    insta.src = Insta;

    let facebook = new Image();
    facebook.src = Facebook;

    let email = new Image();
    email.src = Email;

    div.appendChild(insta);
    div.appendChild(facebook);
    div.appendChild(email);

    return div;
}

function getFooterText() {
    let footerText = document.createElement("div");
    footerText.textContent = "Made By Mubarak";
    footerText.classList.add("author");

    return footerText;
}

function createButton() {
    let div = document.createElement("div");
    let button = document.createElement("button");
    button.textContent = "SIGN UP"

    div.appendChild(button);

    return div;
}

export default function createFooter() {
    let footer = document.createElement("footer");
    footer.appendChild(createSocials());
    footer.appendChild(getFooterText());
    footer.appendChild(createButton());
    return footer;
}