const iconMenu = document.querySelector('.header__icon-menu')
const iconClose = document.querySelector('.header__icon-close')
const menu = document.querySelector('.header__menu')

iconMenu.onclick = () => {
  menu.classList.add('header__menu--active')
  iconMenu.classList.remove('active')
  iconClose.classList.add('active')
}
iconClose.onclick = () => {
  menu.classList.remove('header__menu--active')
  iconMenu.classList.add('active')
  iconClose.classList.remove('active')
}
menu.onclick = () => {
  menu.classList.remove('header__menu--active')
  iconMenu.classList.add('active')
  iconClose.classList.remove('active')
}
