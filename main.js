const iconBurger = document.querySelector("#icon__lines");
const menu = document.querySelector("#menu");
iconBurger.addEventListener("click", function () {
    menu.classList.toggle("show__menu");
});