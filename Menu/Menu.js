const toggleMenu = (e) => {
  // Toggle the "menu--open" class on your menu refence. 
  e.stopPropagation();
  menu.classList.toggle('menu--open');
}



// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector('.menu');
// create a reference to the ".menu-button" class
const menuButton = document.querySelector('.menu-button');
// Using your menuButton reference, add a click handler that calls toggleMenu
menuButton.addEventListener('click', toggleMenu);

const body = document.querySelector('html');
body.addEventListener('click', (e) => {
  e.stopPropagation();
  menu.classList.remove('menu--open')
})