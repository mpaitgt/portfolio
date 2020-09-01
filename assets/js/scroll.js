const 
    about = document.querySelector('.about'),
    projects = document.querySelector('.projects'),
    bandcamp = document.querySelector('.section__bandcamp'),
    link = document.querySelectorAll('.nav__link');

link.forEach(target => {

    target.addEventListener('click', () => {
        switch(target.textContent) {
            case 'About':
                scroll(about);
                break;
            case 'Work & Projects':
                scroll(projects);
                break;
            case 'The Jukebox':
                scroll(bandcamp);
                break;
            default:
                break;
        }
    })
})

scroll = target => {
    target.scrollIntoView({ 
        behavior: 'smooth' 
      }, 2000);
}

// window.onload = function() {
//     window.addEventListener('scroll', function() {
//         console.log(window.pageYOffset);

        
//     })
// }