//1
// const newWindow = window.open('', '', 'width=300,height=300')

// setTimeout(() => {
//     newWindow.resizeTo(500, 500)
// }, 2000)

// setTimeout(() => {
//     newWindow.moveTo(200, 200)
// }, 4000)

// setTimeout(() => {
//     newWindow.close()
// }, 6000)

//2
function changeCSS() {
    text.style.color = 'orange'
    text.style.fontSize = '20px'
    text.style.fontFamily = 'Comic Sans MS'
}

const changeCssBtn = document.getElementById('changeCssBtn')
changeCssBtn.addEventListener('click', () => changeCSS())

//3
button1.addEventListener('click', () => {
    document.body.style.backgroundColor = 'blue'
})

button2.addEventListener('dblclick', () => {
    document.body.style.backgroundColor = 'pink'
})

button3.addEventListener('mousedown', () => {
    document.body.style.backgroundColor = 'brown'
})

button3.addEventListener('mouseup', () => {
    document.body.style.backgroundColor = 'white'
})

link.addEventListener('mouseover', () => {
    document.body.style.backgroundColor = 'yellow'
})

link.addEventListener('mouseout', () => {
    document.body.style.backgroundColor = 'white'
})


//4
const names = ['Peter', 'John', 'Alise', 'Alex', 'Iren']
const dropdown = document.getElementById('dropdownList')

names.forEach(name => {
  const nameElement = document.createElement('option')
  nameElement.text = name
  dropdown.add(nameElement)
})

deleteBtn.onclick = () => {
    const selectedName = dropdown.selectedIndex
    dropdown.remove(selectedName)
}

//5
liveBtn.addEventListener('mouseover', () => {
    outputContainer.innerHTML += 'Mouse on me!<br>'
})

liveBtn.addEventListener('mouseout', () => {
    outputContainer.innerHTML += 'Mouse is not on me!<br>'
})

liveBtn.addEventListener('click', () => {
    outputContainer.innerHTML += 'I was pressed!<br>'
})

//6
const updateSize = () => {
    const width = window.innerWidth
    const height = window.innerHeight
    sizeOutput.innerHTML = `Width: ${width}px<br>Height: ${height}px`
}

window.addEventListener('resize', updateSize)

//7 ????
const countrySelect = document.getElementById('country');
const citiesSelect = document.getElementById('cities');
const selectedLocation = document.getElementById('selectedLocation');

const citiesByCountry = {
  ger: ['Berlin', 'Munich', 'Hamburg'],
  usa: ['New York', 'Los Angeles', 'Chicago'],
  ukr: ['Kyiv', 'Lviv', 'Odesa']
}

// countrySelect.addEventListener('change', function() {
//   const selectedCountry = this.value
//   const cities = citiesByCountry[selectedCountry]

//   cities.forEach(city => {
//     const option = document.createElement('option')
//     option.value = city
//     option.text = city
//     citiesSelect.add(option)
//   })

//   const selectedCountryName = countrySelect.options[countrySelect.selectedIndex].text
//   const selectedCityName = citiesSelect.options[citiesSelect.selectedIndex].text
//   selectedLocation.textContent = `Selected: ${selectedCountryName}, ${selectedCityName}`
// })