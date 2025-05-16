class CardController extends Stimulus.Controller {
  static values = {
    card: Integer
  }
  connect() {
    this.element.addEventListener("click", (event) => {
      event.target.closest(".flip-card").classList.toggle("flipped");
      console.log()
    });
  }
}
