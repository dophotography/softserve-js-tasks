const outputContainer = document.getElementById('output')

//1
class Circle {
    constructor(centerX, centerY, radius) {
        this.centerX = centerX
        this.centerY = centerY
        this.radius = radius
    }

    circumference() {
        return 2 * Math.PI * this.radius
    }

    static getCircumference(radius) {
        return 2 * Math.PI * radius
    }

    getCopy() {
        return new Circle(this.centerX, this.centerY, this.radius)
    }

    static createCircle(centerX, centerY, radius) {
        return new Circle(centerX, centerY, radius)
    }

    pointInside(x, y) {
        const distance = Math.sqrt(Math.pow(x - this.centerX) + Math.pow(y - this.centerY))
        return distance <= this.radius
    }

    toString() {
        return `Circle\nRadius: ${this.radius}\nAbsciss: ${this.centerX}\nOrdinate: ${this.centerY}`
    }

}

//2
const propsCount = (currentObject) => Object.keys(currentObject).length
const obj = {
    car: 1,
    bike: 2,
    subway: 4
}
outputContainer.innerHTML += `${propsCount(obj)}`

//3
class Person {
    constructor(name, surname) {
        this.name = name
        this.surname = surname
    }

    showFullName() {
        console.log(`Name: ${this.name}\nSurname: ${this.surname}`)
    }
}

class Student extends Person {
    constructor(name, surname, year) {
        super(name, surname)
        this.year = year
    }

    showFullName(middleName) {
        return `Name: ${this.name}<br>Surname: ${this.surname}<br>Middle Name: ${middleName}<br><br>`
    }

    showCourse() {
        const currentDate = new Date()
        const currentYear = currentDate.getFullYear()
        return `Course: ${currentYear - this.year}`
    }
}

const student = new Student('John', 'Ophiusa', 2019)
outputContainer.innerHTML += `${student.showFullName('Mary')}` + `${student.showCourse()}`

//4
class Marker {
    constructor(color, inkLevel) {
        this.color = color
        this.inkLevel = inkLevel
    }

    async printText(text) {
        let outputHtml = ''
        let i = 0

        do {
            if (this.inkLevel <= 0) {
                outputHtml += `<span class="out-of-ink"><br><br>Marker is out of ink.</span>`
                break
            }

            const char = text[i]

            if (char !== ' ') {
                if (this.inkLevel >= 0.5) {
                    outputHtml += `<span style="color:${this.color}">${char}</span>`
                    this.inkLevel -= 0.5
                }
            } else {
                outputHtml += ' '
            }

            i++
        } while (i < text.length)

        outputContainer.innerHTML += outputHtml
    }
}

class RefillableMarker extends Marker {
    constructor(color, inkLevel) {
        super(color, inkLevel)
    }

    async refillMarker(ink) {
        this.inkLevel += ink
        alert(`Marker is refilled for ${ink} and current ink level is ${this.inkLevel}`)
    }
}

let text
let color
let inkLevel

document.getElementById('submitText').addEventListener('click', async (event) => {
    event.preventDefault()

    const form = document.getElementById('textForm')
    const textInput = form.elements.textInput
    const textColor = form.elements.textColor
    const markerCapacity = form.elements.markerCapacity

    text = textInput.value
    color = textColor.value
    inkLevel = parseInt(markerCapacity.value)

    const marker = new Marker(color, inkLevel)
    await marker.printText(text)
})

document.getElementById('submitRefill').addEventListener('click', async (event) => {
    event.preventDefault()

    const form = document.getElementById('refillForm')
    const refillAmount = form.elements.refillAmount

    const inkAmount = refillAmount.value

    const refillableMarker = new RefillableMarker(color, inkLevel)
    await refillableMarker.refillMarker(inkAmount)
})

//5
class Worker {

    #experience

    constructor(fullName, dayRate, workingDays) {
        this.fullName = fullName
        this.dayRate = dayRate
        this.workingDays = workingDays
    }

    showSalary() {
        return this.dayRate * this.workingDays
    }

    showSalaryWithExperience() {
        return this.showSalary() * this.#experience
    }

    getExperience() {
        return this.#experience
    }

    setExperience(workerExperience) {
        this.#experience = workerExperience
        console.log(`Worker experience: ${this.#experience}`)
    }

}

document.getElementById('show-salary').addEventListener('click', async (event) => {
    event.preventDefault()

    const worker = new Worker('Mikola', 20, 21)
    outputContainer.innerHTML += worker.showSalaryWithExperience(1.2)

})