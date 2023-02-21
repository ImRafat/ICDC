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
    // autoplay:{
    //   delay: 4000,
    //   disableOnInteraction: true,
    // },
  
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

  let hadiths=["Those people who show no mercy will receive no mercy from Allah.","Wisdom and knowledge are things that the believer lacks. He should take them wherever he finds them.","Religion is very easy and whoever overburdens himself in his religion will not be able to continue in that way. So you should not be extremists, but try to be near to perfection and receive the good tidings that you will be rewarded; and gain strength by worshipping in the mornings, the nights.","No father has ever given a child a gift that is superior to good manners.","It is one of the greatest sins that a man should curse his parents."];
  let item = hadiths[Math.floor(Math.random()*(hadiths.length))];
  let hadithElement=document.getElementsByClassName("hadith")[0].textContent=item;
  // document.getElementById("buttonNext").ej2_instances[0].removeEventListener("click");


  document.addEventListener('click', function(e) 
  {     

  
    // hadithElement=document.getElementsByClassName("hadith")[0].textContent=item;
  })

  $('body').on('focusin', function(e){
    // firstSlide.insertAdjacentHTML('afterBegin','this is happening');
    console.log(e.target.getAttribute('id'));
    // if(e.target.getAttribute('id')=='buttonNext')
    // {
    //   console.log('next button was pressed');
    // }
  });

});



