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


            var firstClickCart = true;
            $(document).bind('click.myEventCart', function(e) {
                if (!firstClickCart && $(e.target).closest('#popup-buy').length == 0) {
                    $('#popup-buy-wrap').removeClass('popup-active');
                    $('#popup-buy').removeClass('popup-active');
                    $('.btn-popup-buy').removeClass('active');
                    $('html').removeClass('ov-h');
                    $(document).unbind('click.myEventCart');
                }

                firstClickCart = false;
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

    // $('.btn-popup-buy').click(function() {
    //     $('#popup-buy-wrap').addClass('popup-active');
    //     $('#popup-buy-wrap').find('#popup-buy').addClass('popup-active');
    // })

});