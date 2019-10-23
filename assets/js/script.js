// EVENT LISTENERS
$("#about-link").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#home-icons").offset().top
    }, 500);
});

$("#skills-link").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#skills-landing").offset().top
    }, 500);
});

$("#project-link").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#project-landing").offset().top
    }, 500);
});

$("#contact-link").click(function() {
    $('#home-icons').animate({
        opacity: '1',
        bottom: '20px'
    }, 500);
});

$("#top-link").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#top-landing").offset().top
    }, 500);
});