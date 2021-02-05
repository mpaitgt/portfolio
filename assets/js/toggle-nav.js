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
// document.addEventListener('click', function(e) {
//   const navItem = document.querySelectorAll('.nav__link');
//   if (e.target === burger) {
//     navContents.classList.toggle('toggle-nav');
//   }
// })

function isDescendant(el, selector) {
  let isChild = false;
  if (el.id === selector) {
    isChild = true;
    return isChild;
  }
  while (el = el.parentNode) {
    if (el.id === selector || $(el).parents('.select2-container').length == 1) {
      isChild = true;
      return isChild;
    }
  }
  return isChild;
}