$(document).ready(function() {

    //mobile burger
    $('.header__burger').click(function () {
        $('.nav').toggleClass('is-visible');
    });

    //init datepicker
    $( "#datepicker" ).datepicker();

});