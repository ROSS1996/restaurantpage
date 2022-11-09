const content = document.getElementById('content')



const main = document.createElement('main')
main.id = 'main'
const phones = document.createElement('h2')
phones.innerText = 'Phones'
const phone1 = document.createElement('p')
phone1.innerText = "+55-21-3333-4444"
const phone2 = document.createElement('p')
phone2.innerText = "+55-21-6666-8888"
const email = document.createElement('p')
email.innerText = "email@example.com"

main.appendChild(phones);
main.appendChild(phone1);
main.appendChild(phone2);
main.appendChild(email);



function loadContact() {
    const old = document.getElementById('main')
    content.replaceChild(main, old)
}

export { loadContact };