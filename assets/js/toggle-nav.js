const 
  burger = document.getElementById('burger'),
  navContents = document.querySelector('.mobile-nav__container'),
  navItems = document.querySelectorAll('.nav__link');

burger.addEventListener('click', function(e) {
  navContents.classList.toggle('toggle-nav');
});

navItems.forEach(item => {
  item.addEventListener('click', function(e) {
    navContents.classList.toggle('toggle-nav');
  })
})