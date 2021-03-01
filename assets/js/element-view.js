document.querySelectorAll('.job-wrapper').forEach(function(item, index, array) {
  item.addEventListener('click', function(e) {

    const allJobs = document.querySelectorAll('.job-description');
    const thisJob = item.querySelector('.job-description');

    if (thisJob.classList.contains('is-visible')) {
      hideElement(thisJob);
    } else {
      showElement(thisJob);
    }

  });

});


// work job description height animation
const showElement = (el) => {

  const getHeight = () => {
    el.style.display = 'block';
    let height = el.scrollHeight + 'px';
    el.style.display = '';
    return height;
  }

  let height = getHeight();
  el.classList.add('is-visible');

  el.style.height = height;

};

const hideElement = (el) => {
  el.style.height = el.scrollHeight + 'px';

  window.setTimeout(function () {
		el.style.height = '0';
	}, 1);

	window.setTimeout(function () {
		el.classList.remove('is-visible');
	}, 200);
};