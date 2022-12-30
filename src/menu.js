const content = document.getElementById('content');

const main = document.createElement('main');
main.id = 'main';
const menu = document.createElement('h2');
menu.innerText = 'Menu';
main.appendChild(menu);

const menuDiv = document.createElement('div');
menuDiv.id = 'menuitems';

const drinksDiv = document.createElement('div');
drinksDiv.classList.add('itemsList');

const drinks = document.createElement('h3');
drinks.innerText = 'Drinks';
drinksDiv.appendChild(drinks);
const water = document.createElement('p');
water.innerText = 'Water: $1';
drinksDiv.appendChild(water);
const soda = document.createElement('p');
soda.innerText = 'Soda: $2';
drinksDiv.appendChild(soda);
const beer = document.createElement('p');
beer.innerText = 'Beer: $5';
drinksDiv.appendChild(beer);

menuDiv.appendChild(drinksDiv);

const foodsDiv = document.createElement('div');

const foods = document.createElement('h3');
foods.innerText = 'Foods';
foodsDiv.appendChild(foods);
const spaghetti = document.createElement('p');
spaghetti.innerText = 'Spaghetti: $10';
foodsDiv.appendChild(spaghetti);
const salad = document.createElement('p');
salad.innerText = 'Salad: $5';
foodsDiv.appendChild(salad);
const soup = document.createElement('p');
soup.innerText = 'Soup: $8';
foodsDiv.appendChild(soup);

foodsDiv.classList.add('itemsList');

menuDiv.appendChild(foodsDiv);

main.appendChild(menuDiv);

function loadMenu() {
  const old = document.getElementById('main');
  content.replaceChild(main, old);
}

export default loadMenu;
