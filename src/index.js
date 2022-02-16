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

// ==== Barba Js =======

function pageTransition() {
  const tl = gsap.timeline();

  tl.to("ul.transition li", {
    duration: 0.5,
    scaleY: 1,
    transformOrigin: " bottom left",
    stagger: 0.2,
  });
  tl.to("ul.transition li", {
    duration: 0.5,
    scaleY: 1,
    transformOrigin: "bottom  left",
    stagger: 0.1,
  });
}

function contentAnimation() {
  const tl = gsap.timeline();

  tl.from(".page", {
    duration: 1.5,
    translateY: 50,
    opacity: 0,
  });
  tl.fromTo(
    "#imgTwo",
    {
      clipPath: "polygon(0 0, 100% 0,  100% 100%, 0% 100%)",
      delay: 1,
      duration: 1,
    },
    "-=1.1"
  );
}

function delay(n) {
  n = n || 2000;
  return new Promise((done) => {
    setTimeout(() => {
      done();
    }, n);
  });
}

barba.init({
  sync: true,
  transition: [
    {
      async leave(data) {
        const done = this.async();

        PageTransition();
        await delay(1500);
        done();
      },

      async enter(data) {
        contentAnimation();
      },

      async once(data) {
        contentAnimation();
      },
    },
  ],
});

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
/* tl.fromTo(
  ".page",
  { opacity: 0 },
  { opacity: 1, delay: 1, duration: 1 },
  " < "
); */
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

/* tl.fromTo(
  "#imgTwo",
  { x: "400", opacity: 0 },
  { x: "0", opacity: 1, delay: 1.5, duration: 1.5 },
  " < "
); */
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

console.groupEnd();
