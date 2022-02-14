console.group("responsive Web Animation");
// Const ===>
const btnMenu = document.querySelector(".menu__active");
console.log(btnMenu);
const listMenu = document.querySelector(".wrapper__burger");
const burgerList = document.querySelector(".burger-list");
// Events ==>
btnMenu.addEventListener("click", () => {
  console.log("click burger");
  /* list.classList.remove("hidden"); */
  /*  listMenu.classList.add("active"); */

  if (listMenu.classList.contains("active")) {
    listMenu.classList.add("hidden");
    listMenu.classList.remove("active");
  } else {
    listMenu.classList.remove("hidden");
    listMenu.classList.add("active");
  }
});

console.groupEnd();
