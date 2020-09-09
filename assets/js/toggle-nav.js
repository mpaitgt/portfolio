const 
  burger = document.getElementById('burger'),
  navContents = document.querySelector('.nav__ul');

burger.addEventListener('click', function(e) {
  // if (navContents.classList.contains('toggle-nav')) {
  //   navContents.classList.remove('toggle-nav');
  // } else {
  //   navContents.classList.add('toggle-nav');
  // }
  navContents.classList.toggle('toggle-nav');
})