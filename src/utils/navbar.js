const navbar = document.querySelector(".menu-m");
const opener = document.getElementById("nav-opener");
const closer = document.getElementById("nav-closer");
const navItem = document.getElementById("nav-item");
const body = document.querySelector("body");

opener.addEventListener("click", () => {
  navbar.className = "menu-m show";
  body.className = "no-scroll";
});

closer.addEventListener("click", () => {
  navbar.className = "menu-m";
  body.className = "";
});

navItem.addEventListener("click", () => {
  navbar.className = "menu-m";
  body.className = "";
});
