//1
function getPromise(message, delay) {
    return new Promise((resolve) => [
        setTimeout(() => {
            resolve(message)
        }, delay)
    ])
}

getPromise('hi', 2000).then((data) => {
    task1.textContent = data
})

//2
function calcArrProduct(arr) {
    return new Promise((resolve, reject) => {
        const isNumber = value => !isNaN(value)

        if (arr.every(isNumber)) {
            const result = arr.reduce((acc, curr) => acc * curr, 1)
            resolve(result)
        } else {
            reject("Error! Incorrect array!")
        }
    })
}

calcArrProduct([3,4,5]).then(result => task2.textContent += result)
calcArrProduct([5,"user2", 7, 12]).then(result => task2.textContent += result)

//3
function askForNumber() {
    return new Promise((resolve, reject) => {
        const number = Number(numberInput.value)
        if (isNaN(number)) {
            reject()
        }
        resolve(number)
    })
}

submitBtn.onclick = () => {
    askForNumber()
    .catch((err) => {
        console.error(err)
        return askForNumber()
    })
    .then((res) => {
        task3.textContent = res
    })
}