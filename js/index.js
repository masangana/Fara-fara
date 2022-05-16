// collapsed-menu menu
const collapsed_menu = document.querySelector('.collapsed-menu');
const navMenu = document.querySelector('.nav-menu');

collapsed_menu.addEventListener('click', () => {
    collapsed_menu.classList.toggle('active');
    navMenu.classList.toggle('active');
  });