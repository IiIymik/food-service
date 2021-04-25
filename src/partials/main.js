import cards from '../templates/card.hbs';

import cardInfo from '../menu.json';

import { Theme } from './constants.js';
console.log(Theme); 

window.onload = () => {
    const menuEl = document.querySelector(".js-menu");
    const defaultTheme = localStorage.setItem('Theme', Theme.LIGHT);
    const markup = cards(cardInfo);
    menuEl.insertAdjacentHTML('beforeend', markup);
 }

// bodyEl.classList.add(Theme.LIGHT);
// window.onload = () => {
// function setTh() {
//   if (checkLocalSt !== null) {
//     return checkLocalSt === Theme.LIGHT ? localStorage.setItem('Theme', Theme.LIGHT) : localStorage.setItem('Theme', Theme.DARK);
//   }
// };


//  function checkBoxValue(e) {
//     return checkBoxEl.checked ? addDarkTheme() : addLightTheme();
//   }


  // function addLightTheme() {
  //   bodyEl.classList.remove(Theme.DARK);
  //   bodyEl.classList.add(Theme.LIGHT);
  //   localStorage.setItem('Theme', Theme.LIGHT);
  // };

  // function addDarkTheme() {
  //   bodyEl.classList.remove(Theme.LIGHT);
  //   bodyEl.classList.add(Theme.DARK);
  //   localStorage.setItem('Theme', Theme.DARK);
  // };
// }

