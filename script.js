const menu = document.getElementById('frontpage');
const glimpse = document.getElementById('glimpse-wrapper');
const crew = document.getElementById('crew-wrapper');
const calendar = document.getElementById('calendar-wrapper');

const menu1 = document.getElementById('menu1');
const menu2 = document.getElementById('menu2');
const menu3 = document.getElementById('menu3');
const menu4 = document.getElementById('menu4');

function showMenu(menuId) {

    if (menuId === 'glimpse') {
      menu.style.display = 'none';
      glimpse.style.display = 'flex';
      crew.style.display = 'none';
      calendar.style.display = 'none';
      menu1.style.fontWeight = 'normal';
      menu2.style.fontWeight = 'bold';
      menu3.style.fontWeight = 'normal';
      menu4.style.fontWeight = 'normal'}
    else if (menuId === 'crew') {
      menu.style.display = 'none';
      glimpse.style.display = 'none';
      crew.style.display = 'block';
      calendar.style.display = 'none';
      menu1.style.fontWeight = 'normal';
      menu2.style.fontWeight = 'normal';
      menu3.style.fontWeight = 'bold';
      menu4.style.fontWeight = 'normal';
    } else if (menuId === 'calendar') {
      menu.style.display = 'none';
      glimpse.style.display = 'none';
      crew.style.display = 'none';
      calendar.style.display = 'block';
      menu1.style.fontWeight = 'normal';
      menu2.style.fontWeight = 'normal';
      menu3.style.fontWeight = 'normal';
      menu4.style.fontWeight = 'bold';
}}