const outputContainer = document.getElementById('output')

//1
function sumSliceArray(arr, first, second) {
    if (isNaN(first) || isNaN(second)) {
        throw new Error('Entered index is not a Number')
    }
    if ((first > arr.length || second> arr.length) || (first > arr.length || second> arr.length))
        throw new Error('Entered indexes are larger than array length')
    outputContainer.innerHTML += `Result of summing 2 elements: ${arr[first] + arr[second]}`
}

const num = [5, 6, -5, 44.3, 5]
const firstIndex = 1
const secondIndex = 8
try{
    sumSliceArray(num, firstIndex, secondIndex)
} catch(err) {
    console.error(`${err.name}, ${err.message}\n ${err.stack}`)
}

console.log()

//2
function checkAge() {
    const userName = prompt('Enter your name')
    const userAge = parseInt(prompt('Enter your age'))
    const userStatus = prompt('Enter your status')

    if (userAge <= 18 || userAge >= 70)
        throw new RangeError()
    else if (isNaN(userAge))
        throw new Error()
    else if (userName === undefined || userAge === undefined || userStatus === undefined)
        throw new Error('The field is empty! Please enter your age')
    else if (!(userStatus === 'admin') && !(userStatus === 'user') && !(userStatus === 'moderator'))
        throw new EvalError()
    else 
        outputContainer.innerHTML += 'Loading your movies...'  
}

try {
    checkAge()
} catch (err) {
    alert(err.name, err.message, err.stack)
}

//3
function calcRectangleArea(width, height) {
    if (isNaN(width) || isNaN(height))
        throw new Error('Only numbers could be entered there')
    if (width <= 0 || height <= 0)
        throw new RangeError('Wrong arguments value range')
    if (width === undefined || height === undefined)
        throw new Error('The field is empty!')
    else
        outputContainer.innerHTML += `Rectangle area is: ${width * height}`
}


const aSide = parseInt(prompt('Enter the first side of rectangle'))
const bSide = parseInt(prompt('Enter the second side of rectangle'))
try {
    calcRectangleArea(aSide, bSide)
} catch (err) {
    console.error(err.message, err.stack)
}

//4
class MonthException {
    constructor(message) {
        this.name = 'MonthException'
        this.message = message
    }
}

function showMonthName(monthIndex) {
    const monthes = [
      'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
    ];

    if (isNaN(monthIndex)) 
        throw new MonthException('Incorrect month index')
    if (monthIndex <= 0 || monthIndex > 12)
        throw new MonthException('Month index can not be less than 0 and more than 12')
    else 
        outputContainer.innerHTML += `${monthIndex} month of the year is <strong>${monthes[monthIndex - 1]}</strong>`
}

const monthIndex = parseInt(prompt('Enter the month index which name you would like to know'))
try {
    showMonthName(monthIndex)
} catch (err) {
    console.error(err.name + ' ' + err.message)
}

//5
function showUser(id) {
    if (id < 0)
        throw new Error('Id can not be negative')
    else
        return { id: id}
}

function showUsers(ids) {
    const checkedIds = []
    for (let id in ids) {
        try {
            const user = showUser(ids[id])
            checkedIds.push(user)
        } catch(err) {
            console.error(err)
        }
    }
    console.log(checkedIds)
}

const ids = [45, 41, 43, -5,  0]
showUsers(ids)