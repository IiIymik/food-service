import cards from '../templates/card.hbs';

import cardInfo from '../menu.json';

import { Theme } from './constants.js';


window.onload = () => {
    const menuEl = document.querySelector(".js-menu");
    const markup = cards(cardInfo);
    menuEl.insertAdjacentHTML('beforeend', markup);
 }


