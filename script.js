let buttonDark = document.querySelector(".theme-button-dark");
let buttonLight = document.querySelector(".theme-button-light");
let page = document.querySelector(".page");
let blogArticles = document.querySelectorAll(".blog-article");
let buttonGrid = document.querySelector(".card-view-button-grid");
let buttonList = document.querySelector(".card-view-button-list");
let cards = document.querySelector(".cards");
let previews = document.querySelectorAll(".preview-list a");
let miniaturesContainer = document.querySelector(".miniatures-container");
let miniatures = miniaturesContainer.querySelectorAll("a");
let elementsContainer = document.querySelector(".elements-container");
let elements = elementsContainer.querySelectorAll("a");
let activePhoto = document.querySelector(".active-photo");
let activeImage = document.querySelector(".active-image");
let activeElement = document.querySelector(".active-element");
let price = document.querySelector(".price");

const toTopBtn = document.getElementById("toTopBtn");

window.onscroll = function () {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    toTopBtn.style.display = "block";
  } else {
    toTopBtn.style.display = "none";
  }
};

toTopBtn.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

buttonDark.onclick = function () {
  buttonDark.classList.add("active");
  buttonLight.classList.remove("active");
  page.classList.add("dark");
};

buttonLight.onclick = function () {
  buttonDark.classList.remove("active");
  buttonLight.classList.add("active");
  page.classList.remove("dark");
};

buttonList.onclick = function () {
  buttonList.classList.add("active");
  buttonGrid.classList.remove("active");
  cards.classList.add("list");
};

buttonGrid.onclick = function () {
  buttonList.classList.remove("active");
  buttonGrid.classList.add("active");
  cards.classList.remove("list");
};

for (let currentPhoto of previews) {
  currentPhoto.onclick = function (evt) {
    evt.preventDefault();
    let previewActive = document.querySelector(".preview-list .active-item");
    previewActive.classList.remove("active-item");
    currentPhoto.classList.add("active-item");

    activePhoto.src = currentPhoto;
  };
}

for (let currentImage of miniatures) {
  currentImage.onclick = function (evt) {
    evt.preventDefault();

    let miniActive = miniaturesContainer.querySelector(".active-item");
    if (miniActive) miniActive.classList.remove("active-item");

    currentImage.classList.add("active-item");

    activeImage.src = currentImage.href;

    const li = currentImage.closest("li");
    const containerRect = miniaturesContainer.getBoundingClientRect();
    const liRect = li.getBoundingClientRect();
    const scrollTop =
      miniaturesContainer.scrollTop + (liRect.top - containerRect.top);

    miniaturesContainer.scrollTo({ top: scrollTop, behavior: "smooth" });
  };
}

for (let currentElement of elements) {
  currentElement.onclick = function (evt) {
    evt.preventDefault();

    let elementActive = elementsContainer.querySelector(".active-item");
    if (elementActive) elementActive.classList.remove("active-item");

    currentElement.classList.add("active-item");

    activeElement.src = currentElement;

    const li = currentElement.closest("li");
    const containerRect = elementsContainer.getBoundingClientRect();
    const liRect = li.getBoundingClientRect();
    const scrollTop =
      elementsContainer.scrollTop + (liRect.top - containerRect.top);

    elementsContainer.scrollTo({ top: scrollTop, behavior: "smooth" });
  };
}

price.onclick = function () {
  price.classList.add("show-price");
};
