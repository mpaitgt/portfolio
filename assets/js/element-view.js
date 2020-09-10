function isInViewport(element) {
  let el = element.getBoundingClientRect();
  return (
    el.top >= 0 &&
    el.left >= 0 &&
    el.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    el.right <= (window.innerWidth || document.documentElement.clientWidth)
  )
}

document.addEventListener('scroll', function(e) {
  let footer = document.querySelector('footer');
  let albumDisplay = document.querySelectorAll('.album-cover');
  console.log(window.innerWidth);
  if (isInViewport(footer) && window.innerWidth > 578) {
    albumDisplay.forEach((album, index) => {
      album.classList.add(`album-${index + 1}`);
    })
  }
})