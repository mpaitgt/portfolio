const
  aboutDestination = document.querySelector('.about'),
  workDestination = document.querySelector('.work'),
  projectsDestination = document.querySelector('.projects'),
  recommendationsDestination = document.querySelector('.recommendations'),
  bandcampDestination = document.querySelector('.bandcamp'),
  contactDestination = document.querySelector('.contact'),
  navLink = document.querySelectorAll('.nav__link');

navLink.forEach(target => {
  target.addEventListener('click', () => {
    switch (target.dataset.name) {
      case 'about':
        scroll(aboutDestination);
        break;
      case 'work':
        scroll(workDestination);
        break;
      case 'projects':
        scroll(projectsDestination);
        break;
      case 'recommendations':
        scroll(recommendationsDestination);
        break;
      case 'bandcamp':
        scroll(bandcampDestination);
        break;
      case 'contact':
        scroll(contactDestination);
        break;
      default:
        break;
    }
  })

  target.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.keyCode === 13) {
      switch (target.dataset.name) {
        case 'about':
          scroll(aboutDestination);
          break;
        case 'work':
          scroll(workDestination);
          break;
        case 'projects':
          scroll(projectsDestination);
          break;
        case 'recommendations':
          scroll(recommendationsDestination);
          break;
        case 'bandcamp':
          scroll(bandcampDestination);
          break;
        case 'contact':
          scroll(contactDestination);
          break;
        default:
          break;
      }
    }
  })
})

function scroll(target) {
  target.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  }, 5000);
}