$(document).ready(function() {
    $('.menu-toggle').click(function() {
        $('header').toggleClass('head')
    })
    
})

$(window).on('scroll load',function() {
   
    $('header').removeClass('head')
   
})