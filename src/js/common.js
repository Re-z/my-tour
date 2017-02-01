$(document).ready(function() {
    $('.js-slider').slick({
        dots: true,
        arrows: false,
        autoplay: true
    });
    
    //mobile burger
    $('.header__burger').click(function () {
        $('.header__nav').toggleClass('is-visible');
    })

    //init datepicker
    $( "#datepicker" ).datepicker();

});