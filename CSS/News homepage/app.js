const openMenuBtn = document.querySelector('.open-menu-btn');
const closeMenuBtn = document.querySelector('.close-menu-btn');
const aside = document.querySelector('.aside');

openMenuBtn.addEventListener('click', function () {
  aside.classList.add('show-aside');
});
closeMenuBtn.addEventListener('click', function () {
  aside.classList.remove('show-aside');
});
