const slider = document.querySelector(".slider");
const sliderItem = document.querySelectorAll(".slider__item");
const Dots = document.querySelectorAll(".dots .dots__item");
let index = 0;

setInterval(() => {
  index = index + 1 >= sliderItem.length ? 0 : index + 1;
  document.querySelector(".slider__item.first").classList.remove("first");
  document.querySelector(".dots .dots__item.first").classList.remove("first");
  sliderItem[index].classList.add("first");
  Dots[index].classList.add("first");
}, 2000);
