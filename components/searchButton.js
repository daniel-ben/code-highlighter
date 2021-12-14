const logo = document.querySelector('[data-logo]');
const searchInput = document.querySelector('[data-search-input]');
const searchButton = document.querySelector('[data-search-icon]');
const menu_Button = document.querySelector('[data-menu-icon]');
const close_Button = document.querySelector('[data-close-icon]');


let isActive = false;

searchButton.addEventListener('click', () => {
  console.log('click');
  if (!isActive) {
    logo.classList.add('hidden');
    searchInput.classList.add('active');
    searchButton.classList.add('hidden');
    menu_Button.classList.add('hidden');
    close_Button.classList.remove('hidden');
    isActive = true;
  } 
})

close_Button.addEventListener('click', () => {
  if (isActive) {
    logo.classList.remove('hidden');
    searchInput.classList.remove('active');
    searchButton.classList.remove('hidden');
    menu_Button.classList.remove('hidden');
    close_Button.classList.add('hidden');
    isActive = false;
  }
})