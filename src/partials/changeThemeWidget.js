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
    bodyEl.classList.remove(Theme.DARK);
    bodyEl.classList.add(Theme.LIGHT);
    localStorage.setItem('Theme', Theme.LIGHT);
     checkBoxEl.removeAttribute('checked');
     currentValueTheme = localStorage.getItem('Theme')
};
  
  function addDarkTheme() {
    bodyEl.classList.remove(Theme.LIGHT);
    bodyEl.classList.add(Theme.DARK);
      localStorage.setItem('Theme', Theme.DARK);
      currentValueTheme = localStorage.getItem('Theme')
    console.log(currentValueTheme);

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