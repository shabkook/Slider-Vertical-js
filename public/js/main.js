let slide = document.querySelectorAll(".slide");
let next = document.querySelector(".next");
let prev = document.querySelector(".prev");
let pagination = document.querySelector(".pagination");

let counter = 0;
function counterSlide(c) {
  console.log(c);
  slide.forEach((elem, index) => {
    elem.style.transform = `translatey(${(index - c) * 100}%)`;
  });
}

function createPagination() {
  slide.forEach((_, index) => {
    pagination.insertAdjacentHTML(
      "beforeend",
      `<div class='bullet ${
        index === 0 ? "activebullet" : ""
      }' data-id=${index}></div>`
    );
  });
}
createPagination();
pagination.addEventListener("click", function (e) {
  // console.log(e.target.classList);
  if (e.target.classList.contains(`bullet`)) {
    const clicked = e.target;
    counter = +clicked.dataset.id;
    const allBullet = clicked
      .closest(".pagination")
      .querySelectorAll(".bullet");
    allBullet.forEach((elem) => elem.classList.remove("activebullet"));
    clicked.classList.add("activebullet");
    counterSlide(counter);
    isDisabled();
  }
});

function isDisabled() {
  if (counter === 0) {
    next.disabled = false; //active
    prev.disabled = true; // in-Active
  } else if (counter === slide.length - 1) {
    next.disabled = true; //in-Active
    prev.disabled = false; //Active
  } else {
    next.disabled = false; //Active
    prev.disabled = false; //Active
  }
}

counterSlide(counter);
next.addEventListener("click", function () {
  if (counter === slide.length - 1) {
    counter = 0;
  } else {
    counter++;
  }
  isDisabled();
  counterSlide(counter);
  let allBullet = document.querySelectorAll(".pagination .bullet");
  allBullet.forEach((elem) => {
    elem.classList.remove("activebullet");
    if (+elem.dataset.id === counter) {
      elem.classList.add("activebullet");
    }
  });
});

prev.addEventListener("click", function () {
  if (counter === 0) {
    counter = slide.length - 1;
  } else {
    counter--;
  }
  isDisabled();
  counterSlide(counter);
  let allBullet = document.querySelectorAll(".pagination .bullet");
  allBullet.forEach((elem) => {
    elem.classList.remove("activebullet");
    if (+elem.dataset.id === counter) {
      elem.classList.add("activebullet");
    }
  });
});

setInterval(() => {
  if (counter === slide.length - 1) {
    counter = 0;
  } else {
    counter++;
  }
  isDisabled();
  counterSlide(counter);
  let allBullet = document.querySelectorAll(".pagination .bullet");
  allBullet.forEach((elem) => {
    elem.classList.remove("activebullet");
    if (+elem.dataset.id === counter) {
      elem.classList.add("activebullet");
    }
  });
}, 5000);
