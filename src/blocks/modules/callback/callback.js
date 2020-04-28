$(function() {
    $('input[type=tel]').bind("change keyup input click", function() {
        if (this.value.match(/[^\+0-9]/g)) {
            this.value = this.value.replace(/[^\+0-9]/g, '');
        }
    });

    $('input[type=tel]').on('focus', function() {
        if ($(this).val() == '') $(this).val('+7');
    });

    $('input[type=tel]').on('blur', function() {
        if ($(this).val() == '+7') $(this).val('');
    });
});