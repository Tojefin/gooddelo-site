function menuOpen() {
  let menu = document.querySelector('.header__menu')
  let links = menu.querySelectorAll('a')
  if (menu.style.top == '0px') {
    menu.style.top = '-100vh'
    links.forEach((i) => {
      i.removeEventListener('click', () => {menu.style.top = '-100vh';})
    });
  } else {
    menu.style.top = '0px';
    links.forEach((i) => {
      i.addEventListener('click', () => {menu.style.top = '-100vh';})
    });
  }
}
