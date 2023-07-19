//1
$('h2.head').addClass('green-background')
$('h2.head .inner').addClass('font-size-35')

//2
$('a').each(function() {
    const href = $(this).attr('href')

    if(href.startsWith('https://'))
        $(this).attr('target', '_blank')
})

//3
$('h3').each(function() {
    const $div = $(this).next('div')

    if($div.length) {
        $(this).before($div);
    }
})

//4
$(document).ready(() => {
    var checkboxes = $('.my-checkbox')
    var maxChecked = 3

    checkboxes.on('change', function() {
        var checkedCount = checkboxes.filter(':checked').length

        checkedCount >= maxChecked ?
            checkboxes.not(':checked').prop('disabled', true) :
            checkboxes.not(':checked').prop('disabled', false)
    })
})