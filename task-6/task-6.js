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


