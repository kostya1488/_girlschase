$(document).ready(function() {

    $('.menu_button').click(() => {
        $('.body').toggleClass('menu_active');
    });

    $('.nav_link').click(function(e) {
        e.preventDefault();

        $('.body').removeClass('menu_active')

        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 800);
    });

});