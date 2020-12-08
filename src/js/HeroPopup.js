import { Popup } from './Popup.js';
export class HeroPopup extends Popup {
  constructor(elem) {
    super(elem);
  }

  // очищает контейнер (удаляет дочерние элементы)
  clear(container) {
    while (container.firstChild) {
      container.firstChild.remove();
    }
  }

  // Добавляет одну карточку в контейнер
  addCard(card, container) {
    container.appendChild(card);
  }
}
