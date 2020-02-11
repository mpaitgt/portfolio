const about = document.querySelector('.about');
const work = document.querySelector('.work');
const bandcamp = document.querySelector('.bandcamp');
let link = document.querySelectorAll('.link');

link.forEach(target => {
    target.addEventListener('click', () => {
        console.log(target.textContent);
        switch(target.textContent) {
            case 'About':
                scroll(about);
                break;
            case 'Projects':
                scroll(work);
                break;
            case 'Interests':
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
      }, 500);
}
