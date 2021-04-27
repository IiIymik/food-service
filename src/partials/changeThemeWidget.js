import { Theme }     from './constants.js';

const bodyEl = document.querySelector('body');

const checkBoxEl = document.getElementById('theme-switch-toggle');

const checkLocalSt = localStorage.getItem('Theme');

let currentValueTheme = '';

checkBoxEl.addEventListener('change', checkBox);

checkValueLS();

function checkBox(e) {
    if (currentValueTheme === Theme.DARK) {
        addDarkTheme();
    }
    return checkBoxEl.checked ? addDarkTheme() : addLightTheme();
}

 function addLightTheme() {
    changeClass(Theme.DARK, Theme.LIGHT);
    localStorage.setItem('Theme', Theme.LIGHT);
     checkBoxEl.removeAttribute('checked');
     currentValueTheme = localStorage.getItem('Theme')
};
  
  function addDarkTheme() {
      changeClass(Theme.LIGHT, Theme.DARK);
      localStorage.setItem('Theme', Theme.DARK);
      currentValueTheme = localStorage.getItem('Theme')
};

function checkValueLS() {
    if (checkLocalSt !== null) {
        if (checkLocalSt === Theme.DARK) {
            checkBoxEl.checked = true;
            checkBoxEl.removeAttribute('checked');
            addDarkTheme();
        } else {
            addLightTheme();
        }
    }
}

function changeClass(removeCl, addCl) {
    bodyEl.classList.remove(removeCl);
    bodyEl.classList.add(addCl);
}


