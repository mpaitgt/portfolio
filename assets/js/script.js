const 
    about = document.querySelector('.about'),
    work = document.querySelector('.work'),
    bandcamp = document.querySelector('.bandcamp'),
    link = document.querySelectorAll('.link');

link.forEach(target => {

    target.addEventListener('click', () => {
        switch(target.textContent) {
            case 'About':
                scroll(about);
                break;
            case 'Projects':
                scroll(work);
                break;
            case 'Bandcamp':
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
      }, 1000);
}

window.onload = function() {
    window.addEventListener('scroll', function() {
        console.log(window.pageYOffset);

        
    })
}