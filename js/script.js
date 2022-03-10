// DROPDOWN MENU

// Select the burger icon, the dropdown menu and the close icon
const btnMobile = document.querySelector('.hamburger_menu');
const dropdownMobile = document.querySelector('.dropdown_mobile');
const closeDropdown = document.querySelector('.close_dropdown');
const navMobile = document.querySelectorAll('.nav_mobile ul li');

console.log(navMobile)

// add a class to the dropdownMobile box
function openMenu() {
  dropdownMobile.classList.add('active');
}

// remove the class from the dropdownMobile box
function closeMenu() {
  dropdownMobile.classList.remove('active');
}


// add an event to the burger icon and to the close icon
btnMobile.addEventListener('click', openMenu);
closeDropdown.addEventListener('click', closeMenu);
// add an event to the li's from the nav menu
navMobile.forEach((item, index) => {
  item.addEventListener('click', closeMenu)
});