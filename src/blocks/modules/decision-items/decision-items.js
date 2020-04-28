$(function() {

    $('.style-tab').click(function() {
        $('.style-tabs').find('.active').removeClass('active');
        $(this).addClass('active');
        $('.styles-elems').find('.styles-elem-item').hide();
        $('#' + $(this).data('switch')).show();
    });

});