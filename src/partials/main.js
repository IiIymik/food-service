import cards from '../templates/card.hbs'
console.log(cards);
import cardInfo from '../menu.json';
console.log(cardInfo);
console.log(cards(cardInfo[0]));