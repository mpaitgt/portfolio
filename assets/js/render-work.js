const myJobs = [
  {
    title: 'UI Developer',
    company: 'PCI',
    duration: 'April 2021 - Present',
    technologies: ['React', 'Typescript', 'Redux Toolkit', 'Styled-Components', 'Storybook'],
    type: '',
    img_path: '/assets/images/astrata.svg',
    github_link: '',
    production_link: '',
    // description: '',
    bullets: [
      'Leads UI design and development on a team of three working on a large&#8209;scale ERP software&nbsp;project.',
      'Created design system and style guide for rapid prototyping and development of new modules, visual consistency through the&nbsp;application.',
      'Architected custom UI component library, integrated Storybook as part of new developer onboarding documentation.',
      'Learned TypeScript and converted 90% of the front-end. This reduced easy&#8209;to&#8209;miss bugs and improved development experience as the team grew from two&nbsp;to&nbsp;three.'
    ]
  },
  {
    title: 'Software Developer',
    company: 'Bearclaw',
    duration: 'August 2020 - Present',
    technologies: ['SCSS', 'jQuery', 'PHP', 'React', 'MySQL', 'Adobe XD'],
    type: 'Freelance',
    img_path: '/assets/images/bearclaw.svg',
    github_link: '',
    production_link: '',
    // description: 'I was brought onto this project to bring a UI design to life. Recruiting software in its development phase, Bearclaw needed a frontend-focused developer to improve the application\'s design and the user experience.',
    bullets: [
      'Leads UI design and development of recruiting software on a team of&nbsp;two.',
      'Recently upgraded the app\'s navigation and dashboard from a legacy jQuery/PHP architecture to React/TypeScript with custom designed SVG icons. This decoupling of the client from the server modernizes the codebase while bringing organization to the app\'s infrastructure.',
      'Led the UI re-design process, working with the client to meet the software user\'s needs and improving the user experience throughout.',
      'Learned PHP in order to develop and deliver full-stack features like color themes, Kanban boards, and global&nbsp;search.',
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
      <article class="job-wrapper${index === 0 ? ' active' : ''}">
        <div class="">
          <div class="job-header">
            <div class="job-title-lockup">
              <img src="${job.img_path}" width="160" />
              <div style="flex: 2;">
                <h3 class="job-title">${job.title}</h3>
              </div>
            </div>
            <div class="job__tech-container">
              ${job.technologies.map((tech) => {
      return `<span class="job__tech">${tech}</span>`;
    }).join('')}
            </div>
          </div>
          <div class="job-details">
            <p>${job.duration}</p>
          </div>
          <div class="job-description${index === 0 ? ' is-visible' : ''}">
            <ul class="work-bullets">
              ${job.bullets.map((bullet) => {
      return `<li>${bullet}</li>`;
    }).join('')}
            </ul>
          </div>
        </div>
        <span class='cta'>Click to expand</span>
      </article>
    `;
  }).join('');
}

{/* <div class="job__tech-container">
${job.technologies.map((tech) => {
  return `<span class="job__tech">${tech}</span>`;
}).join('')}
</div> */}

function attachShowEvent() {
  document.querySelectorAll('.job-wrapper').forEach(function (item, index, array) {
    item.addEventListener('click', function (e) {

      const allJobs = document.querySelectorAll('.job-description');
      const thisJob = item.querySelector('.job-description');

      if (thisJob.classList.contains('is-visible')) {
        hideElement(thisJob);
        item.classList.remove('active');
      } else {
        for (let i = 0; i < allJobs.length; i++) {
          if (allJobs[i].classList.contains('is-visible')) {
            hideElement(allJobs[i]);
            array[i].classList.remove('active');
          }
        }
        showElement(thisJob);
        item.classList.add('active');
        item.scrollIntoView();
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