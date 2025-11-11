document.addEventListener('DOMContentLoaded', function () {
  init();
})

function init() {
  headerFn();
  asideFn();
  modal();
  top3Fn();
  introFn();
  eventFn();
}

function headerFn() {
  const header = document.querySelector('header');
  const headerLogo = document.querySelector('.logo img');
  let menus = document.querySelectorAll('header nav a');
  const headerHeight = document.querySelector('header').offsetHeight;
  const top3Top = document.getElementById('top3').offsetTop;

  // 마우스 오버시 배경색 변경
  header.addEventListener('mouseenter', function () {
    headerAddOn();
  })
  header.addEventListener('mouseleave', function () {
    headerRemoveOn();
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

  // 스크롤시 배경색 변경
  window.addEventListener('scroll', function () {
    let nowScroll = window.scrollY;

    if (nowScroll >= (top3Top - headerHeight)) {
      headerAddOn();

      // 마우스 오버시 배경색 변경되는 오류 수정
      header.addEventListener('mouseleave', function () {
        headerAddOn();
      })
    } else {
      headerRemoveOn();

      // 마우스 오버시 배경색 변경되는 오류 수정
      header.addEventListener('mouseleave', function () {
        headerRemoveOn();
      })
    }
  })

  function headerAddOn() {
    header.classList.add('h-on');
    headerLogo.src = './images/logo-casper_black.png';
  }
  function headerRemoveOn() {
    header.classList.remove('h-on');
    headerLogo.src = './images/logo-casper-white.png';
  }
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

function top3Fn() {
  let top3Swiper = new Swiper("#top3 .swiper", {
    autoplay: {
      delay: 3000,
      disableInInteration: false,
    },
    loop: true,
    navigation: {
      nextEl: "#top3 .swiper-button-next",
      prevEl: "#top3 .swiper-button-prev",
    },
    pagination: {
      el: "#top3 .swiper-pagination",
      clickable: true,
    },
  });
}

function introFn() {
  let introTop = document.getElementById('intro').offsetTop;
  const headerHeight = document.querySelector('header').offsetHeight;
  const texts = document.querySelectorAll('#intro p');

  window.addEventListener('scroll', function () {
    let nowScroll = window.scrollY;

    if (nowScroll >= (introTop - headerHeight)) {
      texts.forEach(function (item) {
        item.classList.add('act');
      })
    } else {
      texts.forEach(function (item) {
        item.classList.remove('act');
      })
    }
  })
}

function eventFn() {
  let eventSwiper = new Swiper("#event .swiper", {
    autoplay: {
      delay: 3000,
      disableInInteration: false,
    },
    loop: true,
    pagination: {
      el: "#event .swiper-pagination",
      clickable: true,
    },
  });
}