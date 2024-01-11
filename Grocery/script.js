
let searchFrom = document.querySelector('.search-from');
document.querySelector('#search-btn').onclick = () =>
{
    searchFrom.classList.toggle('active');

    
    shoppingcart.classList.remove('active');
    loginFrom.classList.remove('active');
    navbr.classList.remove('active');
}

let shoppingcart = document.querySelector('.shopping-cart');
document.querySelector('#cart-btn').onclick = () =>
{
    shoppingcart.classList.toggle('active');
    searchFrom.classList.remove('active');
    loginFrom.classList.remove('active');
    navbr.classList.remove('active');

}

let loginFrom = document.querySelector('.login-from');
document.querySelector('#login-btn').onclick = () =>
{
    loginFrom.classList.toggle('active');

    shoppingcart.classList.remove('active');
    searchFrom.classList.remove('active');
    navbr.classList.remove('active');

}

let navbr = document.querySelector('.navbr');
document.querySelector('#menu-btn').onclick = () =>
{
    navbr.classList.toggle('active');
    loginFrom.classList.toggle('active');

    shoppingcart.classList.remove('active');
    searchFrom.classList.remove('active');
}

window.onscroll = () =>
{
    searchFrom.classList.remove('active');
    shoppingcart.classList.remove('active');
    loginFrom.classList.remove('active');
    navbr.classList.remove('active');

}



/*var swiper = new swiper(".swiper product-slider", 
{
    loop:true,
    spaceBetween: 20,
    
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    }, 

    breakpoints: {
      0: {
        slidesPerView: 1,
        
      },
      768: {
        slidesPerView: 2,
        
      },
      1020: {
        slidesPerView: 3,
        
      },
    },
  });.swiper-container*/

  var mySwiper = new Swiper('.swiper product-slider', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  })
  