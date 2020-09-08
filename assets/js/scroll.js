const 
    aboutDestination = document.querySelector('.about'),
    projectsDestination = document.querySelector('.projects'),
    recommendationsDestination = document.querySelector('.recommendations'),
    bandcampDestination = document.querySelector('.section__bandcamp'),
    navLink = document.querySelectorAll('.nav__link');

navLink.forEach(target => {
    target.addEventListener('click', () => {
        switch(target.textContent) {
            case 'About':
                scroll(aboutDestination);
                break;
            case 'Work & Projects':
                scroll(projectsDestination);
                break;
            case 'Recommendations':
                scroll(recommendationsDestination);
                break;
            case 'Bandcamp':
                scroll(bandcampDestination);
                break;
            default:
                break;
        }
    })
})

function scroll(target) {
    target.scrollIntoView({ 
        behavior: 'smooth' 
      }, 2000);
}