"use strict"

const isMobile = {
  Android: function () {
      return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function () {
      return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function () {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function () {
      return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function () {
      return navigator.userAgent.match(/IEMobile/i);
  },
  any: function () {
      return (
              isMobile.Android()
              || isMobile.BlackBerry()
              || isMobile.iOS()
              || isMobile.Opera()
              || isMobile.Windows()
              );
  }
};

// Swiper-first Header block
const swiper1 = new Swiper('.swiper1', {
    
  direction: 'horizontal',
  loop: false,

  navigation: {
    prevEl: '.swiper-button-prev1',
    nextEl: '.swiper-button-next1',
  },

  effect: 'slide',
  slidesPerView: 1,
          spaceBetween: 30,
          slideToClickedSlide: true,
});

// Swiper-second About block
  const swiper2 = new Swiper('.swiper2', {
    
    direction: 'horizontal',
    loop: false,

    navigation: {
      prevEl: '.swiper-button-prev2',
      nextEl: '.swiper-button-next2',
    },

      effect: 'slide',
      autoHeight: true,

      breakpoints: {
      
        280: {
            slidesPerView: 1,
            spaceBetween: 30,
            slideToClickedSlide: true,
        },
        
        680: {
        
            slidesPerView: 1,
            spaceBetween: 30,
            slideToClickedSlide: true,
        },
        
        1225: {
            slidesPerView: 3,
            spaceBetween: 30,
            slideToClickedSlide: true,
        }
      }
  });

// Swiper-rewiewer block

const swiper3 = new Swiper('.swiper3', {
    
  direction: 'horizontal',
  loop: false,

  navigation: {
    prevEl: '.swiper-button-prev',
    nextEl: '.swiper-button-next',
  },

  effect: 'slide',
  breakpoints: {
      
    280: {
        slidesPerView: 1,
        spaceBetween: 30,
        slideToClickedSlide: true,
    },
    
    680: {
    
        slidesPerView: 2,
        spaceBetween: 30,
        slideToClickedSlide: true,
    },
    
    }
});

// Spoilers

const sections = document.querySelectorAll("details");
sections.forEach((section) => section.addEventListener('toggle', toggleAcordeon));

function toggleAcordeon() {
  this.open && sections.forEach((section) => {
    if (section !== this && section.open) {
      section.open = false;
    }
  });
}




// Burger-menu and links

const burgerMenu = document.querySelector('.header__menu__hamburger');
const menuBody = document.querySelector ('.nav__menu__container');
  if(burgerMenu) {
    burgerMenu.addEventListener('click', function(e) {
      document.body.classList.toggle('_lock');
      burgerMenu.classList.toggle('_active');
      menuBody.classList.toggle('_active');
    });
  }
  function onMenuLinkClick(e) {
    const menuLink = e.target;
    if (burgerMenu.classList.contains('_active')) {
      document.body.classList.remove('_lock');
      burgerMenu.classList.remove('_active');
      menuBody.classList.remove('_active');
      }
    }
    
const menuLinks = document.querySelectorAll('.menu__link');
if(menuLinks.length > 0) {
  menuLinks.forEach(menuLink => {
    menuLink.addEventListener('click', onMenuLinkClick);
  });
}
  