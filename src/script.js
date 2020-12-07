import './style.css';

import { Api } from './js/Api.js';
import { Hero } from './js/Hero.js';
import { HeroesList } from './js/HeroesList.js';

const container = document.querySelector('.cards');

const baseUrl = 'https://swapi.dev/api/';
const api = new Api(baseUrl);
const createCard = (heroObject) => {
  const hero = new Hero();
  const card = hero.create(heroObject);
  return card;
};

const heroesList = new HeroesList(container, createCard);
api.getHeroes().then((data) => {
    heroesList.render(data.results);
});
