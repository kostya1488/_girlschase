$(document).ready(function() {

    // btnUp = $('#button_up_link')

    // // smooth scrolling
    // $(".nav_link").on("click", function(e) {
    //     e.preventDefault();
    //     let id = $(this).attr('href');
    //     let top = $(id).offset().top;
    //     $('body,html').animate({ scrollTop: top }, 900);
    // });

    // // toggle bg color of menu items
    // $('.menu_item').click(function(e) {
    //     e.preventDefault();
    //     $('.menu_item').removeClass('active');
    //     $(this).addClass('active');
    // });

    // // toggle class menu_active
    // $('.toggle_button, .dark_layer, .menu_item').click(function(e) {
    //     e.preventDefault();
    //     $('body').toggleClass('menu_active')
    // });

    $('.menu_button').click(() => {
        $('.body').toggleClass('menu_active');
    });

    $('.nav_link').click(() => {

        $('.body').removeClass('menu_active');

    });

    $('#form_request_button1').click(() => {
        $('.section_feedback_inner').hide();
        $('.response').addClass('active');
        // console.log("sdjbk")
        // return false;

    });

});