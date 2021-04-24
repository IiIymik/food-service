import cards from '../templates/card.hbs'

import cardInfo from '../menu.json';


const menuEl = document.querySelector(".js-menu");

const markup = cards(cardInfo);

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const bodyEl = document.querySelector('body');
// console.log(bodyEl);
const checkBoxEl = document.getElementById('theme-switch-toggle');
// console.dir(checkBoxEl);

checkBoxEl.addEventListener('change', checkBoxValue);

function checkBoxValue(e) {
    console.dir(checkBoxEl.checked);
    return checkBoxEl.checked ? addDarkTheme() : addLightTheme();
}

menuEl.insertAdjacentHTML('beforeend', markup);

function addLightTheme() {
    bodyEl.classList.remove(Theme.DARK);
    bodyEl.classList.add(Theme.LIGHT);
 }
function addDarkTheme() {
      bodyEl.classList.remove(Theme.LIGHT);
    bodyEl.classList.add(Theme.DARK);
}
