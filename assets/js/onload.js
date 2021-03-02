window.onload = async function() {
  // render skills and attach events
  await renderSkills(0);
  attachSkillEvent();
  // render jobs and attach show events
  await renderJobs(myJobs);
  attachShowEvent();
  // render projects
  await renderProjects(myProjects.filter((item, index) => index < 3)); 
  // render first testimonial
  renderQuote(selectedTestimonial);
  // hover animations
  const albumCovers = document.querySelectorAll('.album-cover');
  attachHoverAnimationOnItems(navItems);
  attachHoverAnimationOnItems(albumCovers, true);
};