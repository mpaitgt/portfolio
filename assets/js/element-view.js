function isInViewport(element) {
  let el = element.getBoundingClientRect();
  return (
    el.top >= 0 &&
    el.left >= 0 &&
    el.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    el.right <= (window.innerWidth || document.documentElement.clientWidth)
  )
}

let footer = document.querySelector('footer');

window.addEventListener('scroll', function(e) {
  let albumDisplay = document.querySelectorAll('.album-cover');
  if (isInViewport(footer)) {
    albumDisplay.forEach((album, index) => {
      album.classList.add(`album-${index + 1}`);
    })
  }
})