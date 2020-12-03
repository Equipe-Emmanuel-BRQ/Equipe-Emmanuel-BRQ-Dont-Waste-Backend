let valRange;

$('.input-desperdicio').change(function () {
    valRange = $(this).val()
    console.log(valRange);
    if (valRange == 1) {
        $('.input-desperdicio').css('background-color', 'red')
    } else if (valRange == 2) {
        $('.input-desperdicio').css('background-color', '#5FBAA7')
    } else {
        $('.input-desperdicio').css('background-color', 'green')
    }
})

