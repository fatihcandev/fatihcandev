const goUp = document.querySelector(".chevron-up");

window.addEventListener("scroll", (e) => {
  console.log(window.scrollY);
  if (window.scrollY > 100) {
    goUp.className = "chevron-up show";
  } else {
    goUp.className = "chevron-up";
  }
});
