const iconomenu = document.querySelector(".iconomenu");
const menu = document.querySelector(".menu-navegacion");

// console.log(menu);
// console.log(iconomenu);

iconomenu.addEventListener("click", () => {
  menu.classList.toggle("spread");
});

window.addEventListener("click", (e) => {
  if (
    menu.classList.contains("spread") &&
    e.target != menu &&
    e.target != iconomenu
  ) {
    menu.classList.toggle("spread");
  }
});
