window.onload = async function () {
  // render skills and attach events
  await renderSkills(0);
  attachSkillEvent();
  // render jobs and attach show events
  await renderJobs(myJobs);
  attachShowEvent();
  // render projects
  await renderProjects(myProjects.filter((item, index) => index < 3), true);
  // render first testimonial
  // renderQuote(selectedTestimonial);
  // hover animations
  const albumCovers = document.querySelectorAll('.album-cover');
  // const socialIcons = document.querySelectorAll('ul img.nav__icon');

  attachHoverAnimationOnItems(navItems);
  attachHoverAnimationOnItems(albumCovers, true);
  // attachHoverAnimationOnItems(socialIcons, true);

  const anchors = document.querySelectorAll('a');

  anchors.forEach(a => {
    a.addEventListener('click', function (e) {
      e.stopPropagation();
    })
  })

  // screenshotButton handlers
  const screenshotButtons = document.querySelectorAll('.screenshot-button');

  screenshotButtons.forEach(btn => {
    btn.addEventListener('click', function (e) {
      e.stopPropagation();
      const modal = document.getElementById(btn.id);
      const activeModal = document.querySelector('.active');
      if (!activeModal) modal.classList.add('active');
      screenShotWidthAdjustment(e);
    })
  });

  // screenshotModal close
  document.addEventListener('click', function (e) {
    const modals = document.querySelectorAll('.screenshot-modal');

    modals.forEach(m => {
      const content = m.querySelector('.modal-content');
      if (m.classList.contains('active') && !content.contains(e.target)) {
        m.classList.remove('active');
      }
    })

  })

  window.addEventListener('resize', screenShotWidthAdjustment);

};

function screenShotWidthAdjustment(e) {
  const modalToCheck = document.querySelector('.screenshot-modal.active');
  const width = window.screen.width;

  const rootEl = modalToCheck.querySelector('.swiffy-slider');
  if (width < 576) {
    // if we've gone under the threshold
    // and the modal is open
    if (modalToCheck && modalToCheck.classList.contains('active')) {
      if (rootEl.classList.contains('slider-nav-outside')) {
        rootEl.classList.remove('slider-nav-outside');
      }
    } else {
      if (!rootEl.classList.contains('slider-nav-outside')) {
        rootEl.classList.add('slider-nav-outside');
      }
    }
  } else {
    if (!rootEl.classList.contains('slider-nav-outside')) {
      rootEl.classList.add('slider-nav-outside');
    }
  }
}