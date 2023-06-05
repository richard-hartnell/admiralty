function showMenu(menuId) {
    var menu1 = document.getElementById('menu1');
    var menu2 = document.getElementById('menu2');
    var link1 = document.getElementById('link1');
    var link2 = document.getElementById('link2');

    if (menuId === 'menu1') {
      menu1.style.display = 'block';
      menu2.style.display = 'none';
      link1.style.fontWeight = 'bold';
      link2.style.fontWeight = 'normal';
    } else {
      menu1.style.display = 'none';
      menu2.style.display = 'block';
      link1.style.fontWeight = 'normal';
      link2.style.fontWeight = 'bold';
    }
  }
