const menu = document.getElementById('frontpage');
const glimpse = document.getElementById('glimpse-wrapper');
const crew = document.getElementById('crew-wrapper');
const music = document.getElementById('music-wrapper');
const reviews = document.getElementById('reviews-wrapper');
   
const menu1 = document.getElementById('menu1');
const menu2 = document.getElementById('menu2');
const menu3 = document.getElementById('menu3');
const menu4 = document.getElementById('menu4');
const menu5 = document.getElementById('menu5');

const burgerMenu = document.getElementById('nav-burger');

burgerMenu.style.opacity = 0;
burgerMenu.style.display = "";

function toggleBurger() {
  if (burgerMenu.style.opacity == 0) {
  burgerMenu.style.opacity = 1;
  } else {
    burgerMenu.style.opacity = 0;
  }
}

function showMenu(menuId) {
  if (burgerMenu.style.opacity == 0) {
    toggleBurger
  }
  if (menuId === 'glimpse') {
    menu.style.display = 'none';
    glimpse.style.display = 'flex';
    crew.style.display = 'none';
    music.style.display = 'none';
    reviews.style.display = 'none';
    menu1.style.fontWeight = 'normal';
    menu2.style.fontWeight = 'bold';
    menu3.style.fontWeight = 'normal';
    menu4.style.fontWeight = 'normal';
    menu5.style.fontWeight = 'normal'}
  else if (menuId === 'crew') {
    menu.style.display = 'none';
    glimpse.style.display = 'none';
    crew.style.display = 'block';
    music.style.display = 'none';
    reviews.style.display = 'none';
    menu1.style.fontWeight = 'normal';
    menu2.style.fontWeight = 'normal';
    menu3.style.fontWeight = 'bold';
    menu4.style.fontWeight = 'normal';
    menu5.style.fontWeight = 'normal';
  } else if (menuId === 'music') {
    menu.style.display = 'none';
    glimpse.style.display = 'none';
    crew.style.display = 'none';
    music.style.display = 'block';
    reviews.style.display = 'none';
    menu1.style.fontWeight = 'normal';
    menu2.style.fontWeight = 'normal';
    menu3.style.fontWeight = 'normal';
    menu4.style.fontWeight = 'bold';
    menu5.style.fontWeight = 'normal';
  } else if (menuId === 'reviews') {
    menu.style.display = 'none';
    glimpse.style.display = 'none';
    crew.style.display = 'none';
    music.style.display = 'none';
    crew.style.display = 'none';
    music.style.display = 'none';
    reviews.style.display = 'flex';
    menu1.style.fontWeight = 'normal';
    menu2.style.fontWeight = 'normal';
    menu3.style.fontWeight = 'normal';
    menu4.style.fontWeight = 'normal';
    menu5.style.fontWeight = 'bold';
  }
}