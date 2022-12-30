const content = document.getElementById('content');

const main = document.createElement('main');
main.id = 'main';
const about = document.createElement('h2');
about.innerText = 'About us';
const aboutTxt = document.createElement('p');
aboutTxt.innerText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

main.appendChild(about);
main.appendChild(aboutTxt);

const times = document.createElement('h2');
times.innerHTML = 'Opening Hours';
const timesTxt = document.createElement('p');
timesTxt.innerText = 'from Monday to Thursday from noon to 3:00 pm and from 6:00 pm to 8:00 pm. Friday and Saturday from noon to 1:00 am. Sunday from noon to 10:00 pm.';

main.appendChild(times);
main.appendChild(timesTxt);

const address = document.createElement('h2');
address.innerHTML = 'Address';
const addressTxt = document.createElement('p');
addressTxt.innerText = 'Av. Pres. Castelo Branco, Portão 3 - Maracanã, Rio de Janeiro - RJ, 20271-130';

main.appendChild(address);
main.appendChild(addressTxt);

function firstLoad() {
  content.appendChild(main);
}

function loadHome() {
  const old = document.getElementById('main');
  content.replaceChild(main, old);
}

export { firstLoad, loadHome };
