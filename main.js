let darkmode = localStorage.getItem('darkmode')
const themeSwitch = document.getElementById('theme-switch')

const enableDarkMode = () => {
    document.body.classList.add('darkmode')
    localStorage.setItem('darkmode', 'active')
}

const disableDarkMode = () => {
    document.body.classList.remove('darkmode')
    localStorage.setItem('darkmode', null)
}

const returnBtn = document.getElementById('return')

const contact1Btn = document.getElementById('contact1')
const contact2Btn = document.getElementById('contact2')
const contact3Btn = document.getElementById('contact3')

if (darkmode === 'active') enableDarkMode()

themeSwitch.addEventListener('click', () => {
    darkmode = localStorage.getItem('darkmode')
    darkmode!== 'active' ? enableDarkMode() : disableDarkMode()
})

if(returnBtn) {
returnBtn.addEventListener('click', () => {
    window.location.href = 'index.html'
})
}

if (contact1Btn) {
contact1Btn.addEventListener('click', () => {
    window.location.href = 'https://www.instagram.com/isakpetersson0/'
})
}
if (contact2Btn) {
contact2Btn.addEventListener('click', () => {
    window.location.href = 'https://github.com/IsakPetersson'
})
}
if (contact3Btn) {
contact3Btn.addEventListener('click', () => {
    window.location.href = 'https://www.linkedin.com/in/isak-petersson-801a2937a/'
})
}
