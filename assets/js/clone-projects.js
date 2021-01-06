// function collapseSection(element) {
//   // height of element's inner contents, regardless of size
//   let sectionHeight = element.scrollHeight;
//   // temporarily disable all css transitions
//   let elementTransition = element.style.transition;
//   elementTransition = '';
//   // on next frame (as soon as previous style has taken effect)
//   // explicitly set the element's height to its current pixel height
//   // so we aren't transitioning out of 'auto'
//   requestAnimationFrame(function() {
//     element.style.height = sectionHeight + 'px';
//     element.style.transition = elementTransition;
//     // on next frame, transition height of element to 0
//     requestAnimationFrame(function() {
//       element.style.height = 0 + 'px';
//     })
//   })
// }

// function expandSection(element) {
//   // height of element's inner contents, regardless of size
//   let sectionHeight = element.scrollHeight;
//   element.style.height = sectionHeight + 'px';
//   // when transition finishes
//   element.addEventListener('transitionend', function() {
//     // remove event listener so it only gets called once
//     element.removeEventListener('transitionend', arguments.callee);
//     // remove height from element's inline style so it can return to its initial value
//     element.style.height = null;
//   })
// }

// const recommendationContainer = document.querySelector('.recommendations');
// const quoteContainer = document.querySelector('.quote');

// console.log(recommendationContainer.scrollHeight);

// recommendationContainer.addEventListener('click', function(e) {
//   console.log('hello');
// })