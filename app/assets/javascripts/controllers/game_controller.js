class GameController extends Stimulus.Controller {

  connect() {
    console.log("Game controller connected");
    this.images = [
      "ace_of_hearts",
      "2_of_hearts",
      "3_of_hearts",
      "4_of_hearts",
      "5_of_hearts",
      "6_of_hearts",
      "7_of_hearts",
      "8_of_hearts",
      "9_of_hearts",
      "10_of_hearts",
      "jack_of_hearts2",
      "queen_of_hearts2",
      "king_of_hearts2",
    ];
    const cards = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

    this.grid = [...cards, ...cards];
    this.grid.forEach((card) => (this.addCard(card)));
  }

  addCard(value) {
    const cardContainer = this.element;
    const newCard = document.createElement('button');
    newCard.type = 'button';
    newCard.classList.add('flip-card');
    newCard.dataset.controller = 'card';
    newCard.dataset.cardValue = value;
    newCard.innerHTML = `
      <div class="flip-card-inner">
        <div class="flip-card-front">
          <img src="/assets/card-back.png" alt="Card back">
        </div>
        <div class="flip-card-back">
          <img src="/assets/${this.images[value]}.png" alt="Card ${value}">
        </div>
      </div>
    `;
    cardContainer.appendChild(newCard);
  }
}
