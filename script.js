const NEXT_BUTTON = document.querySelector(".next");
const PREV_BUTTON = document.querySelector(".prev");
const CARDS = document.querySelectorAll(".card");
let currentPostion = 0;
displayCard(currentPostion);
function nextSlide() {
  currentPostion++;
  currentPostion = currentPostion > CARDS.length - 1 ? 0 : currentPostion;
  displayCard(currentPostion);
}
function previousSlide() {
  currentPostion--;
  currentPostion = currentPostion < 0 ? CARDS.length - 1 : currentPostion;
  displayCard(currentPostion);
}
function displayCard(postion) {
  CARDS.forEach((card) => {
    card.style.display = "none";
  });
  CARDS[postion].style.display = "flex";
}
NEXT_BUTTON.addEventListener("click", nextSlide);
PREV_BUTTON.addEventListener("click", previousSlide);
