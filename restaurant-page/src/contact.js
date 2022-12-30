import "./style.css";

export default function createContactPage(main) {
    let contactDiv = document.createElement("div");
    contactDiv.classList.add("contact")

    main.classList.remove("home");
    main.innerHTML = "";

    let heading = document.createElement("h1");
    heading.textContent = "CONTACT US";

    let contactMsg = document.createElement("p");
    contactMsg.textContent = "Send us a message and we’ll get back to you as soon as possible. You can also reach us by phone at 087 3521 7362. Looking forward to hearing from you!";

    let form = document.createElement("form");
    let nameInput = createFormInput("text", "name", "Name");
    let emailInput = createFormInput("email", "email", "Email");
    let phoneNumInput = createFormInput("text", "phoneNum", "Phone Number");
    let messageInput = createTextArea("textArea", "message", "Message");
    let button = document.createElement("button");
    button.textContent = "SEND";

    form.innerHTML = nameInput + emailInput + phoneNumInput + messageInput;
    form.appendChild(button)

    contactDiv.appendChild(heading);
    contactDiv.appendChild(contactMsg);
    contactDiv.appendChild(form)

    return contactDiv;

}

function createFormInput(inputType, inputId, inputPlaceholder) {
    return `
    <input type=${inputType}  id=${inputId} placeholder=${inputPlaceholder}>
    `
}

function createTextArea(inputType, inputId, inputPlaceholder) {
    return `
    <textarea type=${inputType}  id=${inputId} placeholder=${inputPlaceholder}></textarea>
    `
}