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
    darkmode !== 'active' ? enableDarkMode() : disableDarkMode()
})

if (returnBtn) {
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

/* Shooting Star Script */
const createShootingStar = () => {
    const star = document.createElement('div');
    star.classList.add('shooting-star');

    // Spawn randomly along the top (0-100vw) and right (0-50vh) edges
    // Actually user asked for "along the top right corner"
    // So let's bias it towards the right side.

    const startX = Math.random() * 50 + 50; // 50vw to 100vw
    const startY = Math.random() * 50 - 20; // -20vh to 30vh

    star.style.left = `${startX}vw`;
    star.style.top = `${startY}vh`;

    // Randomize duration between 3s and 6s
    const duration = Math.random() * 3 + 3;
    star.style.animationDuration = `${duration}s`;

    document.body.appendChild(star);

    // Remove the star after the animation completes
    setTimeout(() => {
        star.remove();
    }, duration * 1000);
}

// Spawn a star every 800ms to 2500ms
setInterval(() => {
    createShootingStar();
}, 2000);
