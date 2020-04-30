var hamburger = $('#hamburger-icon');
var menu = $('.top-menu');
hamburger.click(function() {
    hamburger.toggleClass('active');
    menu.toggleClass('active');
    $('html').toggleClass('ov-h');
    return false;
});


$(document).ready(function() {

    $(window).on('load resize', function() {
        var width = $(window).width();
        if (width > '992') {

            setTimeout(function() {
                $('.top-menu').removeClass('top-menu-transition');
            }, 300);
        }


        if (width < '993') {

            setTimeout(function() {
                $('.top-menu').addClass('top-menu-transition');
            }, 300);
        }
    });
});