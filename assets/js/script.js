var about = document.getElementById('about-link');
var skills = document.getElementById('skills-link');
var work = document.getElementById('work-link');
var contact = document.getElementById('contact-link');
var boxClass = document.getElementsByClassName('box');
var homeimage = document.getElementById('home-img');
var home = document.getElementById('home');

home.addEventListener('click', function() {
    hideBox();
    var aboutContent = document.getElementById('home');
    homeimage.style.display = 'block';
});

about.addEventListener('click', function() {
    hideBox();
    var aboutContent = document.getElementById('about');
    aboutContent.style.display = 'block';
});

skills.addEventListener('click', function() {
    hideBox();
    var skillsContent = document.getElementById('skills');
    skillsContent.style.display = 'block';
});

work.addEventListener('click', function() {
    hideBox();
    var workContent = document.getElementById('work');
    workContent.style.display = 'block';
});

contact.addEventListener('click', function() {
    hideBox();
    var contactContent = document.getElementById('contact');
    contactContent.style.display = 'block';
});

function hideBox() {
    if(homeimage.style.display = 'block') {
        // homeimage.classList.add('animation-exit');
        homeimage.style.display = 'none';
        // setTimeout(function() {
            
        // }, 1000);  
    }
    for (var i = 0; i < boxClass.length; i++) {
        boxClass[i].style.display = 'none';
    }
}

