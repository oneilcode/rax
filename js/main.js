$(document).ready(function () {
   $('.multiple-items').slick({
      slidesToShow: 1,
      infinite: true,
      slidesToScroll: 1,
      arrows: false,
      dots: true,
      responsive: [{
         breakpoint: 200,
         settings: 'unslick',
         slidesToShow: 1,
      }]

   });

   $('.single-item').slick({
      slidesToShow: 1,
      infinite: true,
      arrows: false,
      dots: true
   });


});