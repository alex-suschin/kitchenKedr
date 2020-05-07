// var hamburger = $('#hamburger-icon');
// var menu = $('.top-menu');
// hamburger.click(function() {
//     hamburger.toggleClass('active');
//     menu.toggleClass('active');
//     $('html').toggleClass('ov-h');
//     return false;
// });


$('#hamburger-icon').click(function(i) {
    $(this).addClass('active');

    var menuMob = $('top-menu');


    if (menuMob.hasClass('active') == false) {
        $('#hamburger-icon').addClass('active');
        $('.top-menu').addClass('active');
        $('html').addClass('ov-h');


        var firstClickMenu = true;
        $(document).bind('click.myEventMenu', function(i) {
            if (!firstClickMenu && $(i.target).closest('.top-menu').length == 0) {
                $('#hamburger-icon').removeClass('active');
                $('.top-menu').removeClass('active');
                $('html').removeClass('ov-h');
                $(document).unbind('click.myEventMenu');
            }

            firstClickMenu = false;
        });
    }

    i.preventDefault();
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