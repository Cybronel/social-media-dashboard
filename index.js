const button = document.querySelector('.btn')
const body = document.querySelector('body')
const buttonContainer = document.querySelector('.button-container')

button.addEventListener('click', () => {
    button.classList.toggle('is-active')
    body.classList.toggle('darkmode')
    buttonContainer.classList.toggle('white-border')
})

