import { firstLoad, loadHome } from "./home";
import { loadContact } from "./contact";
import { loadMenu } from "./menu";
import './style.css';

let name = 'Generic Restaurant'

const content = document.getElementById('content')

const header = document.createElement('header')
const title = document.createElement('h1')
title.innerText = name
header.appendChild(title)

const tabs = document.createElement('nav')
const tabsList = document.createElement('ul')
tabsList.classList.add('tabs')

const tabHome = document.createElement('li')
tabHome.innerText = 'Home'
tabHome.classList.add('tabLink')
const tabMenu = document.createElement('li')
tabMenu.innerText = 'Menu'
tabMenu.classList.add('tabLink')
const tabContact = document.createElement('li')
tabContact.innerText = 'Contact'
tabContact.classList.add('tabLink')

tabsList.appendChild(tabHome)
tabsList.appendChild(tabMenu)
tabsList.appendChild(tabContact)

tabs.appendChild(tabsList)

tabHome.addEventListener('click', function () {
    loadHome();
})


tabMenu.addEventListener('click', function () {
    loadMenu();
})

tabContact.addEventListener('click', function () {
    loadContact();
})


header.appendChild(tabs)

content.appendChild(header)

firstLoad();

const footer = document.createElement('footer')
const p = document.createElement('p')
let author = 'Robson Santana'
p.innerHTML = `Created by <a href='http://github.com/ROSS1996' target='_blank'>${author}</a>`
footer.appendChild(p)
content.appendChild(footer)

