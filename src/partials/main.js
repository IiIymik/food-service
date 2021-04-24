import cards from '../templates/card.hbs'

import cardInfo from '../menu.json';


const menuEl = document.querySelector(".js-menu");

const markup = cards(cardInfo);

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const bodyEl = document.querySelector('body');
console.log(bodyEl);

menuEl.insertAdjacentHTML('beforeend', markup);

