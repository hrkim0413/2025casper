document.addEventListener('DOMContentLoaded', function () {
  init();
})

function init() {
  headerFn();
  asideFn();
  modal();
}

function headerFn() {
  const header = document.querySelector('header');
  const headerLogo = document.querySelector('.logo img');
  let menus = document.querySelectorAll('header nav a');

  // 마우스 오버시 배경색 변경
  header.addEventListener('mouseenter', function () {
    header.classList.add('h-on');
    headerLogo.src = './images/logo-casper_black.png';
  })
  header.addEventListener('mouseleave', function () {
    header.classList.remove('h-on');
    headerLogo.src = './images/logo-casper-white.png';
  })

  // 메뉴 클릭시 section 이동
  menus.forEach(function (menu) {
    menu.addEventListener('click', function (e) {
      e.preventDefault();

      let sectionId = this.getAttribute('href');
      let sectionTop = document.querySelector(sectionId).offsetTop;

      window.scrollTo({
        top: sectionTop,
        behavior: 'smooth',
      })
    })
  })
}

function asideFn() {
  let menus = document.querySelectorAll('#m-nav a');

  menus.forEach(function (menu) {
    menu.addEventListener('click', function (e) {
      e.preventDefault();

      let sectionId = this.getAttribute('href');
      let sectionTop = document.querySelector(sectionId).offsetTop;

      window.scrollTo({
        top: sectionTop,
        behavior: 'smooth',
      })
    })
  })
}

function modal() {
  const modal = document.querySelector('.modal');
  const close = document.querySelector('.modal .close');
  const mCk = document.querySelector('.modal #m-ck');

  if ($.cookie('popup') == 'none') {
    modalClose();
  }

  close.addEventListener('click', function () {
    modalClose();

    if (mCk.checked) {
      $.cookie('popup', 'none', { expires: 1, path: '/' });
    }
  })

  function modalClose() {
    modal.style.display = 'none';
  }
}