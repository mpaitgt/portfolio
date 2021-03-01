navItems.forEach((item, index, array) => {
  let lastItemIndex = array.length - 1;

  // Add hover effect
  item.addEventListener('mouseenter', function(e) {
    if (screen.width > 952) {

    // if it's the first item
    if (index === 0) {
      for (let i = index + 1; i < array.length; i++) {
        navItems[i].classList.add('push-right');
      }
    // if it's the last item
    } else if (index === lastItemIndex) {
      for (let i = index - 1; i >= 0; i--) {
        navItems[i].classList.add('push-left');
      }
    // if it's any item in-between
    } else {
      for (let i = 0; i < array.length; i++) {
        if (i < index) {
          navItems[i].classList.add('push-left');
        } else if (i > index) {
          navItems[i].classList.add('push-right');
        }
      }
    }
          
    }
  })

  // Remove hover effect
  item.addEventListener('mouseleave', function(e) {
    if (screen.width > 952) {

    // if it's the first item
    if (index === 0) {
      for (let i = index + 1; i < array.length; i++) {
        navItems[i].classList.remove('push-right');
      }
    // if it's the last item
    } else if (index === lastItemIndex) {
      for (let i = index - 1; i >= 0; i--) {
        navItems[i].classList.remove('push-left');
      }
    } else {
      for (let i = 0; i < array.length; i++) {
        if (i < index) {
          navItems[i].classList.remove('push-left');
        } else if (i > index) {
          navItems[i].classList.remove('push-right');
        }
      }
    }
    }
  })
})


const albumCovers = document.querySelectorAll('.album-cover');

albumCovers.forEach((item, index, array) => {
  let lastItemIndex = array.length - 1;

  // Add hover effect
  item.addEventListener('mouseenter', function(e) {
    // if it's the first item
    if (index === 0) {
      for (let i = index + 1; i < array.length; i++) {
        albumCovers[i].classList.add('push-right_hard');
      }
    // if it's the last item
    } else if (index === lastItemIndex) {
      for (let i = index - 1; i >= 0; i--) {
        albumCovers[i].classList.add('push-left_hard');
      }
    // if it's any item in-between
    } else {
      for (let i = 0; i < array.length; i++) {
        if (i < index) {
          albumCovers[i].classList.add('push-left_hard');
        } else if (i > index) {
          albumCovers[i].classList.add('push-right_hard');
        }
      }
    }
  })

  // Remove hover effect
  item.addEventListener('mouseleave', function(e) {
    // if it's the first item
    if (index === 0) {
      for (let i = index + 1; i < array.length; i++) {
        albumCovers[i].classList.remove('push-right_hard');
      }
    // if it's the last item
    } else if (index === lastItemIndex) {
      for (let i = index - 1; i >= 0; i--) {
        albumCovers[i].classList.remove('push-left_hard');
      }
    } else {
      for (let i = 0; i < array.length; i++) {
        if (i < index) {
          albumCovers[i].classList.remove('push-left_hard');
        } else if (i > index) {
          albumCovers[i].classList.remove('push-right_hard');
        }
      }
    }
  })
})