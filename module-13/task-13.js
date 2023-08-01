//1
function vote() {
    const xhr = new XMLHttpRequest()

    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                const response = xhr.responseText
                const voteTimestamp = new Date(response)

                voteButton.innerText = `Your vote is accepted: ${voteTimestamp}`

                voteButton.disabled = true
            } else {
                alert('Error making request!')
            }
        }
    }

    xhr.open('GET', '/vote', true)
    xhr.send()
}

//2
function loadAuthors() {
    const xhr = new XMLHttpRequest()
    xhr.onreadystatechange = () => {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                const books = JSON.parse(xhr.responseText)
                books.forEach((book) => {
                    const author = document.createElement('li')
                    author.textContent = book.author
                    authorsList.appendChild(author)
                })
            } else {
                alert('Error making request!')
            }
        }
    }

    xhr.open('GET', 'books.json', true)
    xhr.send()
}

//3
async function loadUser() {
    try {
        const pTags = document.querySelectorAll('#userContainer p')

        const response = await fetch('https://randomuser.me/api/')
        const data = await response.json()
        const user = data.results[0]

        const usersInfo = [
            `Name: ${user.name.first} ${user.name.last}`,
            `Age: ${user.dob.age}`,
            `Gender: ${user.gender}`,
            `Country: ${user.location.country}`,
            `Login: ${user.login.username}`,
            `Password: ${user.login.password}`,
            `Email: ${user.email}`
        ]

        avatar.src = user.picture.medium

        for (let i = 0; i < usersInfo.length; i++) {
            pTags[i].textContent = usersInfo[i]
        }
    } catch (err) {
        alert('Error making request!')
        console.error(err)
    }

}
