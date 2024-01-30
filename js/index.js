let btn = document.querySelector('.header__burger')
let navbar = document.querySelector('.header__menu-list')
let closeBtn = document.querySelector('.hide')
let overlay = document.querySelector('.overlay')


btn.onclick = () => {
    navbar.classList.toggle('open')
    overlay.classList.toggle('open')
}

closeBtn.onclick = () => {
    navbar.classList.remove('open')
    overlay.classList.remove('open')
}

overlay.addEventListener('click', function () {
    navbar.classList.remove('open')
    overlay.classList.remove('open')
})