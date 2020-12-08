import './style.css';

import { Api } from './js/Api.js';
import { Hero } from './js/Hero.js';
import { HeroesList } from './js/HeroesList.js';
import { HeroPopup } from './js/HeroPopup.js';
import { VehicleList } from './js/VehicleList.js';
import { Vehicle } from './js/Vehicle.js';

const heroesContainer = document.querySelector('.cards');
const vehiclesContainer = document.querySelector('.vehicles');
const containerHeroInfo = document.querySelector('.popup__hero-info');

const baseUrl = 'https://swapi.dev/api/';

const api = new Api(baseUrl);
const createCard = (heroObject) => {
  const hero = new Hero();
  const card = hero.create(heroObject);
  return card;
};
const heroesList = new HeroesList(heroesContainer, createCard, getHeroDetails); 
const createVehicle = (vehicleObject) => {
  const vehicleElem = new Vehicle();
  const vehicle = vehicleElem.create(vehicleObject);
  return vehicle;
};
let arrHeroes = [];
const vehicleList = new VehicleList(vehiclesContainer, createVehicle);
const heroPopup = new HeroPopup(document.querySelector('#popupHero'));

api.getHeroes().then((data) => {
  arrHeroes = data.results;
  heroesList.render(data.results);  
});

// добавляет информацию о герое в попап
function addInfoHero(elem, container) {
    const cardHero = createCard(elem);
    heroPopup.addCard(cardHero, container);
}

function getHeroDetails(elemTarget) {
  // по имени героя находим нужный элемент в массиве героев
  const elem = arrHeroes.find((item) => {
    return item.name === elemTarget.dataset.name;
  });
  // очищаем контейнеры (удаляем данные героя и подробную информацию о ТС) 
  heroPopup.clear(containerHeroInfo);
  heroPopup.clear(vehiclesContainer);
  // отрисовываем информацию о герое
  addInfoHero(elem, containerHeroInfo);  

  // если у героя есть транспортные средства, делаем запрос к API и отображаем их
  const lengthArr = elem.vehicles.length;
  if (lengthArr > 0) {
    if (elem.vehiclesDetails) {
      vehicleList.render(elem.vehiclesDetails);
      heroPopup.open();
    } else {
      elem.vehiclesDetails = [];
      const vehiclesResult = elem.vehicles.map((item) => {
        return api.getInfo(item).then((data) => {
          elem.vehiclesDetails.push(data);
        });
      });

      Promise.all(vehiclesResult).then(() => {
        vehicleList.render(elem.vehiclesDetails);
        heroPopup.open();
      });
    }

    // если у героя нет транспортных средств, то выводим сообщение
  } else {
    const remark = document.createElement('p');
    remark.textContent = 'Не использует транспортные средства';
    vehiclesContainer.appendChild(remark);
    heroPopup.open();
  }
}
