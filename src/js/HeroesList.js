export class HeroesList {
  constructor(container, createCard) {
    this.container = container;
    this.create = createCard;     
  }

  render(arrCards) {
    arrCards.forEach((element) => {
      const card = this.create(element);
      this.container.appendChild(card);
    });
  }
}
