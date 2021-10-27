const myJobs = [
  {
    title: 'Software UI Developer',
    company: 'PCI',
    duration: 'April 2021 - Present',
    technologies: ['React', 'Typescript', 'Redux Toolkit', 'Styled-Components', 'Axios', 'Adobe XD', 'Storybook'],
    type: 'Full-Time',
    github_link: '',
    production_link: '',
    // description: '',
    bullets: [
      'Leads UI development for a large-scale application using React and Styled-Components, and Redux Toolkit for state management.',
      'Working with Principal Software Architect to communicate with back-end APIs and securely fetch data using Axios.',
      'Managing the project in Jira and with Git version control for an organized development workflow.',
    ]
  },
  {
    title: 'Software Developer',
    company: 'Bearclaw',
    duration: 'August 2020 - Present',
    technologies: ['SCSS', 'jQuery', 'PHP', 'MySQL', 'Adobe XD'],
    type: 'Freelance',
    github_link: '',
    production_link: '',
    // description: 'I was brought onto this project to bring a UI design to life. Recruiting software in its development phase, Bearclaw needed a frontend-focused developer to improve the application\'s design and the user experience.',
    bullets: [
      'Leads the recruiting software’s UI development, from design to code, and in a year has built a consistent and organized SCSS codebase.',
      'Develops full-stack features using jQuery, PHP, and MySQL.',
      'Continually looks to for improvements in the user experience',
    ]
  },
  // {
  //   title: 'Digital Marketing Specialist',
  //   company: 'HearingLife',
  //   duration: 'April 2018 - Present',
  //   technologies: ['HTML', 'CSS', 'JavaScript', 'APIs', 'Email Analytics'],
  //   type: 'Full-Time',
  //   github_link: '',
  //   production_link: 'https://salvageboy.com',
  //   description: 'I started with HearingLife as coordinator in 2018, and got promoted to email/web around the time I enrolled at bootcamp. While not a "developer" by job title, in 2020 I spearheaded the marketing team\'s effort to integrate the Podium Reviews API on our over 400 location web pages. This included:',
  //   bullets: [
  //     'Writing the script to fetch review data from the Podium API with location IDs and parsing the JSON response.',
  //     'Structuring HTML and designing for style and mobile-friendly functionality.',
  //     'A team-wide QA testing process in which all data was matched with its source to ensure accuracy.',
  //     'I\'ve also done a lot of fun work in email, designing creative layouts in XD and implementing strong and consistent analytics reporting.'
  //   ]
  // },
];

function renderJobs(arr) {
  const work = document.querySelector('.work-container');

  work.innerHTML = arr.map((job, index) => {
    return `
      <article class="job-wrapper">
        <div class="job-header">
          <div class="job-headline-wrapper">
            <h3 class="section__headline large">
              ${job.company}
            </h3>
          </div>
          <div style="display: flex; justify-content: flex-start; align-items: center;">
            <div>
              <h3 class="job-title">${job.title}</h3>
              <div class="job-details">
                <h4>${job.duration} <span>|</span> ${job.type}</h4>
                <div class="job__tech-container">
                  ${job.technologies.map((tech) => {
                    return `<span class="job__tech">${tech}</span>`;
                  }).join('')}
                </div>
                </h4>
              </div>
            </div>
          </div>
          <div class="job-description${index === 0 ? " is-visible" : ""}">
            <ul class="work-bullets">
              ${job.bullets.map((bullet) => {
                return `<li><p class='section__copy'>${bullet}</p></li>`;
              }).join('')}
            </ul>
          </div>
        </div>
      </article>
    `;
  }).join('');
}

function attachShowEvent() {
  document.querySelectorAll('.job-wrapper').forEach(function(item, index, array) {
    item.addEventListener('click', function(e) {
  
      const allJobs = document.querySelectorAll('.job-description');
      const thisJob = item.querySelector('.job-description');
  
      if (thisJob.classList.contains('is-visible')) {
        hideElement(thisJob);
      } else {
        for (let i = 0; i < allJobs.length; i++) {
          if (allJobs[i].classList.contains('is-visible')) {
            hideElement(allJobs[i]);
          }
        }
        showElement(thisJob);
      }
    });
  
  });
}

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
  // el.querySelector('.fading-arrow').classList.add('close');
};

const hideElement = (el) => {
  el.style.height = el.scrollHeight + 'px';

  window.setTimeout(function () {
		el.style.height = '0';
	}, 1);

	window.setTimeout(function () {
		el.classList.remove('is-visible');
    // el.querySelector('.fading-arrow').classList.remove('close');
	}, 200);
};