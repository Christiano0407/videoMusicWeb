console.group("responsive Web Animation");
// Const ===>
const btnMenu = document.querySelector(".menu__active");
console.log(btnMenu);
const listMenu = document.querySelector(".wrapper__burger");
const burgerList = document.querySelector(".burger-list");
// Events ==>
// =========  BTN Menu Animation ============
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
// =========  Animation GSAP =================
const tl = gsap.timeline({ default: { ease: "power2.out" } });

// = Background =
tl.fromTo(
  ".background__image",
  { opacity: 0 },
  { opacity: 1, delay: 0.51, duration: 0.5 },
  " < "
);
// = Page =
tl.fromTo(
  ".page",
  { opacity: 0 },
  { opacity: 1, delay: 1, duration: 1 },
  " < "
);
tl.fromTo(
  ".navigation",
  { y: "-200", opacity: 0 },
  { y: "0", opacity: 1, delay: 1.5, duration: 1.5 },
  " < "
);
tl.fromTo(
  ".active",
  { y: "-200", opacity: 0 },
  { y: "0", opacity: 1, delay: 1.5, duration: 1.5 },
  "<"
);
// Aside
tl.fromTo(
  "#asideBar",
  { x: "-300", opacity: 0 },
  { x: "0", opacity: 1, delay: 1.5, duration: 1 },
  " < "
);
// Main ===
tl.fromTo(
  "#background",
  { opacity: 0 },
  { opacity: 1, delay: 1.5, duration: 1.5 },
  " < "
);

tl.fromTo(
  "#imgTwo",
  { x: "400", opacity: 0 },
  { x: "0", opacity: 1, delay: 1.5, duration: 1.5 },
  " < "
);
tl.fromTo(
  "#mainNeon",
  { x: "-400", opacity: 0 },
  { x: "0", opacity: 1, delay: 1.5, duration: 1.5 },
  " < ",
  "-=1"
);
tl.fromTo(
  "#mainNumber",
  { x: "400", opacity: 0 },
  { x: "0", opacity: 1, delay: 1.5, duration: 1.5 },
  "<",
  "-=1"
);
tl.fromTo(
  "#modelText",
  { x: "300", opacity: 0 },
  { x: "0", opacity: 1, delay: 1.5, duration: 1.5 },
  "<",
  "-=1"
);

// ======= Animation DOM Javascript =======
const textOne = document.getElementById("textOne");
console.log(textOne);
textOne.style.color = "#0CF2B1";
