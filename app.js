const burger = document.querySelector("#burger");
const burgerClose = document.querySelector("#burger-close");
const navList = document.querySelector("#nav-list");

burger.addEventListener("click", () => {
  navList.classList.toggle("show");
  burger.classList.add('close')
  burgerClose.classList.add('show')
});

burgerClose.addEventListener("click", () => {
  navList.classList.toggle("show");
  burger.classList.remove('close')
  burgerClose.classList.remove('show')
  burgerClose.classList.add('close')
});
