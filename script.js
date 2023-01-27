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

let currentImage = 0;
let images = document.querySelectorAll(".image-container img");
let prevButton = document.querySelector("#prev-button");
let nextButton = document.querySelector("#next-button");

prevButton.addEventListener("click", function() {
  currentImage--;
  if (currentImage < 0) {
    currentImage = images.length - 1;
  }
  updateGallery();
});

nextButton.addEventListener("click", function() {
  currentImage++;
  if (currentImage === images.length) {
    currentImage = 0;
  }
  updateGallery();
});

function updateGallery() {
  let imageContainer = document.querySelector(".image-container");
  imageContainer.style.left = "-" + (currentImage * 25) + "%";
}
