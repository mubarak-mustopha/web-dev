import './style.css';

export default function createHomePage(main) {
    main.innerHTML = "";
    main.classList.add("home")//this add a background image to the main section

    let welcomeText = document.createElement("div");
    welcomeText.classList.add("welcome-text");
    welcomeText.innerHTML = "Welcome To Muby's <br> Doughnut";

    return welcomeText;
}