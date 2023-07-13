//1
// const list = document.getElementById('list')
// const items = list.getElementsByTagName('li')
// const button = document.getElementById('button')

// const showElements = () => {
//     let content = ''
//     content += `1) ${items[0].textContent}\n`
//     content += `2) ${items[items.length - 1].textContent}\n`
//     content += `3) ${items[1].textContent}\n`
//     content += `4) ${items[3].textContent}\n`
//     content += `5) ${items[2].textContent}`

//     alert(content)
// }

// button.addEventListener('click', showElements)

//2
// const button = document.getElementById('change-css')

// const heading = document.getElementById('heading')

// const article = document.getElementById('article')
// const paragraphs = article.querySelectorAll('p')

// const list = document.getElementById('list')
// const listItems = list.querySelectorAll('li')

// const invisibleSpan = document.getElementById('invisible-span')

// function changeCss() {
//     heading.style.backgroundColor = '#90ee90'

//     paragraphs[0].innerHTML = `<strong>First paragraph</strong>`
//     paragraphs[1].style.color = 'red'
//     paragraphs[2].style.textDecoration = 'underline'
//     paragraphs[3].style.fontStyle = 'italic'
//     for (let i = 0; i < listItems.length; i++) {
//         listItems[i].style.display = 'inline';
//     }

//     invisibleSpan.style.display = 'none';

// }

// button.addEventListener('click', changeCss())

//3
// const button = document.getElementById('change-body')

// window.onload = () => {


//     const body = document.createElement('body')
//     const main = document.createElement('main')
//     const div = document.createElement('div')
//     const p = document.createElement('p')


//     main.classList.add('mainClass', 'check', 'item')
//     div.id = 'myDiv'

//     p.textContent = 'First paragraph'

//     div.appendChild(p)
//     main.appendChild(div)
//     body.appendChild(main)

//     document.documentElement.replaceChild(body, document.body)
// }

//4
// const btnSubmit = document.querySelector('input[type="submit"]')
// const outputContainer = document.querySelector('.output')
// const outputBlock = document.createElement('p')
// outputBlock.classList.add('text-output')
// outputContainer.appendChild(outputBlock)

// class User {
//     constructor(fullName, phone, birthday, email) {
//         this.fullName = fullName
//         this.phone = phone
//         this.birthday = birthday
//         this.email = email
//     }

//     set fullName(newName) {
//         this._fullName = newName
//     }

//     get fullName() {
//         return `${this._fullName}`
//     }

//     set phone(newPhone) {
//         this._phone = newPhone
//     }

//     get phone() {
//         return `${this._phone}`
//     }

//     set birthday(newBirthday) {
//         this._birthday = newBirthday
//     }

//     get birthday() {
//         return `${this._birthday}`
//     }

//     set email(email) {
//         this._email = email
//     }

//     get email() {
//         return `${this._email}`
//     }

//     output() {
//         return `Full name: ${this.fullName}\nPhone number: ${this.phone}\nDate of birth: ${this.birthday}\nE-mail: ${this.email}\n\n`
//     }

// }

// btnSubmit.addEventListener('click', () => {
//     outputBlock.textContent = ''
//     let outputUsers = []
//     const userName = document.querySelector('input[name="name"]').value
//     const userPhone = document.querySelector('input[name="phone"]').value
//     const userBirthday = document.querySelector('input[name="birthday"]').value
//     const userEmail = document.querySelector('input[name="email"]').value

//     try {
//         const user = new User(userName, userPhone, userBirthday, userEmail)
//         outputUsers.push(user.output())
//     } catch (err) {
//         console.error(err)
//     }

//     for (const user of outputUsers) {
//         outputContainer.innerText += `${user}`
//     }
// })

//5
// const circles = document.querySelectorAll('div.circle')

// circles.forEach(circle => {
//     circle.classList.add(circle.getAttribute('data-anim'))
// })

//6
