const 
  burger = document.getElementById('burger'),
  navContents = document.querySelector('.nav__ul');

burger.addEventListener('click', function(e) {
  navContents.classList.toggle('toggle-nav');
})
