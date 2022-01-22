$(function () {
    var $slider = $(".hero-carousel");
    var $progressBar = $("#hero-carousel-progress");
    var $progressBarLabel = $("#hero-carousel-progress .slider__label");
  
    $slider.on("beforeChange", function (event, slick, currentSlide, nextSlide) {
      var calc = (nextSlide / (slick.slideCount - 1)) * 100;
  
      $progressBarLabel.text(calc + "% completed");
    });
  
    $slider.slick({
      prevArrow: $(".slide-prev"),
      nextArrow: $(".slide-next")
    });

    $('.hero-carousel').slick({
      autoplay: true,
      autoplaySpeed: 1500,
    })
});

