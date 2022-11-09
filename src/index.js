import { loadHome } from "./home";

let name = 'Dump Restaurant'


const content = document.getElementById('content')

const header = document.createElement('header')
const title = document.createElement('h1')
title.innerText = name
header.appendChild(title)

content.appendChild(header)

loadHome();

const footer = document.createElement('footer')
const p = document.createElement('p')
let author = 'Robson Santana'
p.innerHTML = `Created by <a href='http://github.com/ROSS1996' target='_blank'>${author}</a>`
footer.appendChild(p)
content.appendChild(footer)

