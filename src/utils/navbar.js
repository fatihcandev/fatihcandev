const navbar = document.querySelector(".menu-m");
const opener = document.getElementById("nav-opener");
const closer = document.getElementById("nav-closer");
const navItem = document.getElementById("nav-item");

opener.addEventListener("click", () => {
  navbar.className = "menu-m show";
});

closer.addEventListener("click", () => {
  navbar.className = "menu-m";
});

navItem.addEventListener("click", () => {
  navbar.className = "menu-m";
});
