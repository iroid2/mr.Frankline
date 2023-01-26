var splide = new Splide( '.splide', {
  type  : 'slide',
  rewind: true,
  perPage : 1,
  autoplay: true,
  autoplayTimeout:1000,
  } );

 splide.mount()

 $('.owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  nav:true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:3
      },
      1000:{
          items:5
      }
  }
})