function openMenu(){
    document.body.classList +=" menu--open";
}

function closeMenu(){
    document.body.classList.remove('menu--open');
}

$( document ).ready(function() {
  const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
    autoplay:{
      delay: 4000,
      disableOnInteraction: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',      
      prevEl: '.swiper-button-prev',
    },

    style:{
      ".swiperArrows-color": "#ffff",
      "--swiper-pagination-color": "#ffff",
    }    
  });

  const hadiths=["Those people who show no mercy will receive no mercy from Allah.","Wisdom and knowledge are things that the believer lacks. He should take them wherever he finds them.","Religion is very easy and whoever overburdens himself in his religion will not be able to continue in that way. So you should not be extremists, but try to be near to perfection and receive the good tidings that you will be rewarded; and gain strength by worshipping in the mornings, the nights."];
  const item = hadiths[Math.floor(Math.random()*(hadiths.length))];
  const hadithElement=document.getElementsByClassName("hadith")[0].textContent=item;
  

});


