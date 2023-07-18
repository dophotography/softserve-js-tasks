//1
function upperCase(str) {
    const regexpUpperCase = /[A-Z]/
    regexpUpperCase.test(str) ? 
        upperCaseOutput.textContent = `String's starts with uppercase character` :
        upperCaseOutput.textContent = `String's not starts with uppercase character`
}

upperCase('Matter')

//2
function checkEmail(email) {
    const regexpEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    regexpEmail.test(email) ?
        checkEmailOutput.textContent = 'true' :
        checkEmailOutput.textContent = 'false'
}

checkEmail('Qmail2@')

//3
const substringInputText = document.querySelectorAll('substringInput')
const substringChangeBtn = document.getElementById('substringChangeBtn')

function swapSubstring(text, substring1, substring2) {
    const regex = new RegExp(`(${substring1})(.*)(${substring2})`)
    substringOutput.textContent = text.replace(`$3$2$1`)
}

substringChangeBtn.addEventListener('click', () => {
    swapSubstring(substringTextInput.value, substringFirstWord.value, substringSecondWord.value)
})

