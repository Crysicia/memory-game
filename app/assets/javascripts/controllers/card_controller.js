class CardController extends Stimulus.Controller {
  connect() {
    this.element.addEventListener("click", (event) => {
      event.target.closest(".flip-card").classList.toggle("flipped");
    });
  }
}
