$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        items: 1,
        nav: true,
        dots: false,
        loop: true,

        smartSpeed: 700,        
        autoplay: true,
        autoplayTimeout: 10000,
        autoplayHoverPause: true
    });
});