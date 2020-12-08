export class HeroesList {
  constructor(container, createCard, callback) {
    this.container = container;
    this.create = createCard;
    this.callback = callback;

    this.setEventListenersСontainer();
  }

  // Добавляет одну карточку в контейнер
  addCard(card) {
    this.container.appendChild(card);
  }

  // отрисовывает список всех героев на странице
  render(arrCards) {
    arrCards.forEach((element) => {
      const card = this.create(element);
      this.addCard(card);
    });
  }

  setEventListenersСontainer() {
    this.container.addEventListener('click', (event) => {
      const card = event.target.closest('.card');
      if (card) {
        this.callback(card);
      }
    });
  }
}
