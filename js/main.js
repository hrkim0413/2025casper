document.addEventListener('DOMContentLoaded', function () {
  init();
})

function init() {
  headerFn();
}

function headerFn() {
  const header = document.querySelector('header');
  const headerLogo = document.querySelector('.logo img');

  header.addEventListener('mouseenter', function () {
    header.classList.add('h-on');
    headerLogo.src = './images/logo-casper_black.png';
  })
  header.addEventListener('mouseleave', function () {
    header.classList.remove('h-on');
    headerLogo.src = './images/logo-casper-white.png';
  })
}