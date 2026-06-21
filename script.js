const icons = ["🧢", "🔧", "🚗", "☕", "🧢", "🔧", "🚗", "☕"];
let shuffled = icons.sort(() => 0.5 - Math.random());

const board = document.getElementById("gameBoard");
const message = document.getElementById("message");

let firstCard = null;
let lockBoard = false;
let matches = 0;

shuffled.forEach(icon => {
  const card = document.createElement("div");
  card.classList.add("card");
  card.textContent = "";
  card.dataset.icon = icon;

  card.addEventListener("click", () => {
    if (lockBoard || card.classList.contains("matched")) return;

    card.textContent = icon;

    if (!firstCard) {
      firstCard = card;
    } else {
      if (firstCard.dataset.icon === card.dataset.icon) {
        firstCard.classList.add("matched");
        card.classList.add("matched");
        matches++;
        if (matches === icons.length / 2) {
          message.classList.remove("hidden");
        }
        firstCard = null;
      } else {
        lockBoard = true;
        setTimeout(() => {
          firstCard.textContent = "";
          card.textContent = "";
          firstCard = null;
          lockBoard = false;
        }, 700);
      }
    }
  });

  board.appendChild(card);
});
