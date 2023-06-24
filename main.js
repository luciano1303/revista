//filter js
$(document).ready(function(){
    $('.filter-item').click(function(){
        const value = $(this).attr('data-filter')
        if (value == 'all)') {
            $('.post-box').not('.')
        }
        else{
            $('.post-box')
            .not('.' + value)
            .hide('1000')
            $('.post-box')
            .not('.' + value)
            .show('1000')
        }
    })
})
