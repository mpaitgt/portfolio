const
  burger = document.getElementById('burger'),
  navContents = document.querySelector('.mobile-nav__container'),
  navItems = document.querySelectorAll('.nav__link');

burger.addEventListener('click', function (e) {
  navContents.classList.toggle('toggle-nav');
  burger.classList.toggle('active');
});

navContents.addEventListener('transitionstart', function (e) {

  if (navContents.classList.contains('toggle-nav') && window.innerWidth <= 952) {
    navItems.forEach((item, index) => {
      item.classList.add(`appear-${index + 1}`);
    })
  } else {
    navItems.forEach((item, index) => {
      item.classList.remove(`appear-${index + 1}`);
    })
  }
})

navItems.forEach(item => {
  item.addEventListener('click', function (e) {
    navContents.classList.toggle('toggle-nav');
    burger.classList.toggle('active');
  })
})