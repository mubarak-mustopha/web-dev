import Boston from "./images/menu/boston-donut.jpg";
import Cider from "./images/menu/cider-donut.jpg";
import Malasada from "./images/menu/malasada.jpg";
import Sunshine from "./images/menu/sunshine-donut.jpg";
import IcedSugar from "./images/menu/iced-sugar.jpg";
import "./style.css";

export default function createMenuPage(main) {
    main.innerHTML = "";
    main.classList.remove("home");

    let menu = document.createElement("div");
    menu.classList.add("menu");

    let bostonDonut = createDonutMenuBox(Boston, "Boston Donut", 7.5);
    let ciderDonut = createDonutMenuBox(Cider, "Cider Donut", 4.5);
    let icedSugar = createDonutMenuBox(IcedSugar, "Iced Sugar Donut", 12);
    let malasada = createDonutMenuBox(Malasada, "Malasada Donut", 9.5);
    let sunshine = createDonutMenuBox(Sunshine, "Sunshine Donut", 3.5);

    let menuMarkUp = bostonDonut + ciderDonut + icedSugar +
        malasada + sunshine;
    menu.innerHTML = menuMarkUp;


    return menu;
}

function createDonutMenuBox(imgSrc, donutName, donutPrice) {

    return `<div class="donut">
    <img src=${imgSrc} alt="">
    <p class="name">${donutName}</p>
    <p class="price">${donutPrice}</p>
</div>

`;

}