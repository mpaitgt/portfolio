// GLOBAL VARIABLES
var skillBtn = document.getElementById('skill-btn');
var pickedCat = document.getElementById('random-category');
var skillsArray = ['JavaScript/jQuery', 'CSS/Bootstrap', 'Firebase', 'Adobe Creative Suite'];
    
// EVENT LISTENERS
document.querySelectorAll('.button').forEach(function(buttonSelect) {
    buttonSelect.addEventListener('mouseup', function() {
            showArray(skillsArray);
    });
});

document.querySelectorAll('.button').forEach(function(buttonSelect) {
    buttonSelect.addEventListener('mousedown', function() {
    
    });
});


// FUNCTIONS
function showArray(array) {
    pickedCat = $('#random-category');
    for (var x = 0; x < array.length; x++) {
        var listItem = $('<p>');
        listItem.text(array[x]);
        listItem.animate({
            opacity: '1'
        })
        pickedCat.append(listItem);
    }
}

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