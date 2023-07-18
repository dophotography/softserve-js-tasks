//1
function upperCase(str) {
    const regexpUpperCase = /[A-Z]/
    regexpUpperCase.test(str) ? 
        upperCaseOutput.textContent = `String's starts with uppercase character` :
        upperCaseOutput.textContent = `String's not starts with uppercase character`
}

upperCaseBtn.onclick = () => {
    upperCase(upperCaseInput.value)
}

//2
function checkEmail(email) {
    const regexpEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    regexpEmail.test(email) ?
    emailOutput.textContent = 'true' :
        emailOutput.textContent = 'false'
}

emailBtn.onclick = () => {
    checkEmail(emailInput.value)
}

//3
function swapSubstring(text) {
    const regexpSubstring = /(\w+)\s(\w+)/
    substringOutput.textContent = text.replace(regexpSubstring, '$2, $1')
}

substringChangeBtn.addEventListener('click', () => {
    swapSubstring(substringTextInput.value)
})

//4
function cardValidation(cardNumber) {
    const regexpCardNumber = /[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{4}/
    regexpCardNumber.test(cardNumber) ?
        checkCardNumberOutput.textContent = `Card number is valid` : checkCardNumberOutput.textContent = `Card number is not valid`
}

cardNumberValidation.onclick = () => {
    cardValidation(cardNumberInput.value)
}

//5
function emailValidation(email) {
    const regexpEmailValidation = /[A-Za-z0-9]+([_\-.][A-Za-z0-9]+)*@[A-Za-z0-9]+([_\-.][A-Za-z0-9]+)*\.[A-Za-z]{2,}/
    regexpEmailValidation.test(email) ? 
        emailValidationOutput.textContent = `Email is correct` : emailValidationOutput.textContent = `Email is not correct`
}

emailValidationBtn.onclick = () => {
    emailValidation(emailValidationInput.value)
}

//6
function loginValidation(login) {
    const regexpLoginValidation = /[A-Za-z][A-Za-z0-9]{1,9}/
    const numbers = login.match(/[0-9.]+/g)
    regexpLoginValidation.test(login) ? 
        loginValidationOutput.textContent = `Login is correct. Numbers in login: ${numbers}` : loginValidationOutput.textContent = `Email is not correct. Numbers in login: ${numbers}`
}

loginValidationBtn.onclick = () => {
    loginValidation(loginValidationInput.value)
}