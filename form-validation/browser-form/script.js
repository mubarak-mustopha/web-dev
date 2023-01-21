let form = document.querySelector("form");
let inputFields = Array.from(document.querySelectorAll("form input"));

let validate = (...inputFields) => {
    inputFields.forEach(
        (field) => {
            field.addEventListener("input", (e) => {
                let error = document.querySelector(`#${e.target.id} + .error`);
                if (e.target.validity.valid) {
                    error.textContent = "";
                    error.classList.remove("active");
                } else {
                    showMessage(e.target, error)
                }
            })
        }
    )
}

function showMessage(inputField, errorSpan) {
    let label = inputField.getAttribute("placeholder");
    if (inputField.validity.typeMismatch) {
        errorSpan.textContent = `Please type in a/an ${label.toLowerCase()}`
    } else if (inputField.validity.valueMissing) {
        errorSpan.textContent = `${label} can't be empty bro`
    } else if (inputField.validity.patternMismatch) {
        if (inputField.id === "zipcode") {
            errorSpan.textContent = "Please enter a zip code with this pattern 1234-5678 or 1234 5678"
        }
    } else if (inputField.validity.tooShort) {
        errorSpan.textContent = `${label} must be a minimum of ${inputField.getAttribute("minlength")} characters`
    }
    errorSpan.classList.add("active");
}

let checkValidity = (...inputFields) => {
    for (const input of inputFields) {
        if (!input.validity.valid) return false;
    }
    return true;
}

let displayHighFive = () => {
    let container = document.querySelector(".container");
    container.innerHTML = "";

    let highFiveContainer = document.createElement("div");
    highFiveContainer.classList.add("high-five");

    let highFive = new Image();
    highFive.src = "high-five.png";

    let p = document.createElement("p")
    p.textContent = "DONE"

    highFiveContainer.appendChild(highFive);
    highFiveContainer.appendChild(p)
    container.appendChild(highFiveContainer);
}

form.addEventListener("submit", (event) => {
    if (!checkValidity(...inputFields)) {
        alert("Please try filling form correctly.")
        event.preventDefault();
    } else {
        displayHighFive();
    }
})

document.addEventListener("DOMContentLoaded", validate(...inputFields))