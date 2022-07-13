const iconBurger = document.querySelector("#icon__lines");
const menu = document.querySelector("#menu");
iconBurger.addEventListener("click", function () {
    menu.classList.toggle("show__menu");
});



//! color del nav
const containerNav = document.querySelector(".container_nav");
window.onscroll = function () {
  let y = window.scrollY;

  if (y > 1) {
    containerNav.classList.add("auxNav");
  } else {
    containerNav.classList.remove("auxNav");
  }
 
};


//! dark mode boton
const iconsDm = document.querySelector(".icons_dm");
const moon = document.querySelector(".moon")
const sun = document.querySelector(".sun")
sun.addEventListener("click", () => {
  document.body.classList.add("darkmode");
 
});
moon.addEventListener("click", () => {
    document.body.classList.remove("darkmode");
    
  });