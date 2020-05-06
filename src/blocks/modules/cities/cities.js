$(function() {

    // $('.cities-list').masonry({
    //     itemSelector: '.cities-list__item',
    //     columnWidth: 245
    // });


    $('.btn-popup-buy').click(function(e) {
        $(this).addClass('active');

        var popupCont = $('#popup-buy');


        if (popupCont.hasClass('popup-active') == false) {
            $('#popup-buy-wrap').addClass('popup-active');
            $('#popup-buy').addClass('popup-active');
            $('html').addClass('ov-h');


            var firstClick = true;
            $(document).bind('click.myEventCart', function(e) {
                if (!firstClick && $(e.target).closest('#popup-buy').length == 0) {
                    $('#popup-buy-wrap').removeClass('popup-active');
                    $('#popup-buy').removeClass('popup-active');
                    $('.btn-popup-buy').removeClass('active');
                    $('html').removeClass('ov-h');
                    $(document).unbind('click.myEventCart');
                }

                firstClick = false;
            });
        }

        e.preventDefault();
    });

    $('.close-popup').click(function() {
        $('#popup-buy-wrap').removeClass('popup-active');
        $('#popup-buy').removeClass('popup-active');
        $('.btn-popup-buy').removeClass('active');
        $('html').removeClass('ov-h');
        $(document).unbind('click.myEventCart');
    });


    $('.cities-items a').click(function(w) {
        $(this).addClass('active');

        var popupCities = $('#popup-cities');


        if (popupCities.hasClass('popup-active') == false) {
            $('#popup-cities-wrap').addClass('popup-active');
            $('#popup-cities').addClass('popup-active');
            $('html').addClass('ov-h');


            var firstClickCities = true;
            $(document).bind('click.myEventCartCities', function(w) {
                if (!firstClickCities && $(w.target).closest('#popup-cities').length == 0) {
                    $('#popup-cities-wrap').removeClass('popup-active');
                    $('#popup-cities').removeClass('popup-active');
                    $('.cities-items a').removeClass('active');
                    $('html').removeClass('ov-h');
                    $(document).unbind('click.myEventCartCities');
                }

                firstClickCities = false;
            });
        }

        w.preventDefault();
    });

    $('.js-close-cities').click(function() {
        $('#popup-cities-wrap').removeClass('popup-active');
        $('#popup-cities').removeClass('popup-active');
        $('.cities-items a').removeClass('active');
        $('html').removeClass('ov-h');
        $(document).unbind('click.myEventCartCities');
    });

    // $('.btn-popup-buy').click(function() {
    //     $('#popup-buy-wrap').addClass('popup-active');
    //     $('#popup-buy-wrap').find('#popup-buy').addClass('popup-active');
    // })

});