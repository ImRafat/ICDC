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
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }    
  });
});


