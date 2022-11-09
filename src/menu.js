const content = document.getElementById('content')

const main = document.createElement('main')
main.id = 'main'
const menu = document.createElement('h2')
menu.innerText = 'Menu'
main.appendChild(menu);


const drinks = document.createElement('h3')
drinks.innerText = 'Drinks'
main.appendChild(drinks);

import waterObj from './images/water.jpg';
const waterImage = new Image();
waterImage.src = waterObj;
waterImage.classList.add('menuItem')
const water = document.createElement('p')
water.innerText = "Water: $1"
main.appendChild(waterImage)
main.appendChild(water);

import sodaObj from './images/soda.jpg';
const sodaImg = new Image();
sodaImg.src = sodaObj;
sodaImg.classList.add('menuItem')
const soda = document.createElement('p')
soda.innerText = "Soda: $2"
main.appendChild(sodaImg)
main.appendChild(soda);

import beerObj from './images/beer.jpg';
const beerImg = new Image();
beerImg.src = beerObj;
beerImg.classList.add('menuItem')
const beer = document.createElement('p')
beer.innerText = "Beer: $5"
main.appendChild(beerImg)
main.appendChild(beer);

const foods = document.createElement('h3')
foods.innerText = 'Foods'
main.appendChild(foods);
const spaghetti = document.createElement('p')
spaghetti.innerText = "Spaghetti: $10"
const salad = document.createElement('p')
salad.innerText = "Salad: $5"
const soup = document.createElement('p')
soup.innerText = "Soup: $8"
main.appendChild(spaghetti);
main.appendChild(salad);
main.appendChild(soup);


function loadMenu() {
    const old = document.getElementById('main')
    content.replaceChild(main, old)
}

export { loadMenu };