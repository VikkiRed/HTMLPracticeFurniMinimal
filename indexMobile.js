const swiper = new Swiper('.swiper', {
   
    direction: 'vertical',
    loop: false,
  
    navigation: {
      prevEl: '.s-button-prev',
      nextEl: '.s-button-next',
     
    },
  
    effect: 'slide',

  });

  
  //const swiper1 = new Swiper('.catalog__swiper', {
   
    direction: 'horizontal',
    loop: false,
  
    navigation: {
      prevEl: '.swiper-button-prev',
      nextEl: '.swiper-button-next',
     
    },

    pagination: {
        el: '.swiper-pagination',
      },
  
    effect: 'slide',

  //});
  