window.onload = async function() {
  await renderSkills(0);
  attachSkillEvent();
  await renderProjects(myProjects.filter((item, index) => index < 3)); 
}

let myProjects = [
  {
    "id": 99,
    "title": "Recruiting Software",
    "image": "./assets/images/project-images/sass-logo.jpg",
    "technologies": [
      "HTML & CSS", "CSS Grid", "SCSS/SASS", "PHP", "MySQL"
    ],
    "description": "Implementing front-end UI in code, bringing an organized design system to recruiting software currently in development.",
    "github_link": "",
    "production_link": ""
  },
  {
    "id": 98,
    "title": "Salvage Boy",
    "image": "./assets/images/project-images/salvage-boy.JPG",
    "technologies": [
      "HTML & CSS", "CSS Grid", "SCSS/SASS"
    ],
    "description": "Re-designing the front-end UI and bringing an organized design system to this used car parts software meant to streamline the online selling process.",
    "github_link": "",
    "production_link": "https://www.salvageboy.com"
  },
  {
    "id": 1,
    "title": "Recordshare",
    "image": "./assets/images/project-images/recordshare.JPG",
    "technologies": [
      "React.js", "MongoDB Atlas", "Emotion.css", "Cloudinary", "Passport", "Node.js & Express"
    ],
    "description": "Personal MERN-stack project developed to allow people to share the music they love with others, and agregrate audience ratings.",
    "github_link": "https://www.github.com/mpaitgt",
    "production_link": "https://www.recordshare.herokuapp.com"
  },
  {
    "id": 2,
    "title": "Ecohabit",
    "image": "./assets/images/project-images/ecohabit.JPG",
    "technologies": [
      "React.js", "Material UI", "Passport", "Cloudinary", "Node.js & Express", "MongoDB"
    ],
    "description": "A React app that helps its users develop more eco-friendly daily habits and encourage more green living. ",
    "github_link": "https://www.github.com/jayjscotto/ecohabit",
    "production_link": "https://www.ecohabit.herokuapp.com"
  },
  {
    "id": 3,
    "title": "Eton Controls",
    "image": "./assets/images/project-images/eton-controls-image.JPG",
    "technologies": [
      "HTML & CSS", "SCSS/SASS", "JavaScript", "Email.js"
    ],
    "description": "Freelance front-end website developed for a local machine parts cleaning company. Developed using HTML, CSS, and Javascript.",
    "github_link": "https://www.github.com/mpaitgt/eton-ctrls",
    "production_link": "https://www.etoncontrols.com"
  },
  {
    "id": 4,
    "title": "The Floor Is Yours",
    "image": "./assets/images/project-images/tfiy.JPG",
    "technologies": [
      "React.js", "Material UI", "Email.js"
    ],
    "description": "Freelance front-end website developed for a local dance studio using React.js and Material UI, while utilizing the Google Maps API for location display.",
    "github_link": "https://www.github.com/mpaitgt/tfiy",
    "production_link": "https://www.thefloorisyoursdancecenter.com"
  },
  {
    "id": 5,
    "title": "Deetz",
    "image": "./assets/images/project-images/deetz.JPG",
    "technologies": [
      "HTML & CSS", "jQuery", "JavaScript", "SCSS/SASS", "Handlebars", "MySQL", "Sequelize", "Node.js & Express"
    ],
    "description": "Inspired by my day job, I developed this database mangement software allowing you to gain consistency and accuracy in your data.",
    "github_link": "https://www.github.com/mpaitgt/deetz",
    "production_link": "https://www.deetz.herokuapp.com"
  },
  {
    "id": 6,
    "title": "Give a Gift",
    "image": "./assets/images/project-images/gift.JPG",
    "technologies": [
      "HTML & CSS", "JavaScript", "jQuery", "AJAX"
    ],
    "description": "A web app which uses the Giphy API to generate GIFs on request. The user can even store their favorite GIFs locally in the 'Favorites' section.",
    "github_link": "https://www.github.com/mpaitgt/give-a-gift",
    "production_link": "https://mpaitgt.github.io/Give-a-Gift/"
  },
  {
    "id": 8,
    "title": "Medo",
    "image": "./assets/images/project-images/medo.JPG",
    "technologies": [
      "HTML & CSS", "JavaScript", "jQuery", "Animate.css", "Firebase", "Moment.js"
    ],
    "description": "It's the age of content, and we've all got too many recommendations from friends. Allow Medo to be the central place where you can organize all of those things you've been meaning to check out!",
    "github_link": "https://www.github.com/mpaitgt/medo-frontend",
    "production_link": "https://mpaitgt.github.io/medo-frontend"
  },
  {
    "id": 7,
    "title": "The Skinny Pancake",
    "image": "./assets/images/project-images/skinny-pancake.JPG",
    "technologies": [
      "Wordpress", "HTML & CSS"
    ],
    "description": "Worked from January 2015 through June 2016 as Marketing Coordinator developing content and performing web maintinence for four domains.",
    "github_link": "",
    "production_link": "https://skinnypancake.com"
  },
  {
    "id": 9,
    "title": "Email Development at HearingLife",
    "image": "./assets/images/project-images/email.jpg",
    "technologies": [
      "Email Development", "HTML & CSS", "Adobe XD"
    ],
    "description": "Currently I develop segmented email campaigns for HearingLife using custom HTML and CSS. Our emails are developed mobile-first, and are targeted at audiences from 200 to 20,000.",
    "github_link": "",
    "production_link": ""
  },
  {
    "id": 9,
    "title": "Web Development at HearingLife",
    "image": "./assets/images/project-images/hl-website.JPG",
    "technologies": [
      "HTML & CSS", "JavaScript", "Podium API", "Sitecore"
    ],
    "description": "In addition to email, I manage content regularly using Sitecore at HearingLife. I've also been working on some new features to the site, including displaying location reviews.",
    "github_link": "",
    "production_link": "https://www.hearinglife.com/hearing-aids-centers/Alabama/Albertville"
  }
];

let skills = [
  'Recent Projects',
  'HTML & CSS',
  'SCSS/SASS',
  'JavaScript',
  'React.js',
  'Material UI',
  'jQuery',
  'Emotion.css',
  'MySQL',
  'MongoDB',
  'MongoDB Atlas',
  'Firebase',
  'Node.js & Express',
  'Wordpress',
  'Sitecore',
  'Email Development'
];

let selectedSkill = null;

function renderSkills(num) {
  // map through the array of skills and return a 
  // new array with the HTML to render each skill button
  let 
    ul = document.querySelector('.list__skills'),
    newArr = skills.map((skill, index) => {
      if (index == Number.parseInt(num)) {
        selectedSkill = skill;
        return `<li class="skill-selector skill__active" data-id="${index}">${skill}</li>`;
      } else {
        return `<li class="skill-selector skill__inactive" data-id="${index}">${skill}</li>`;
      }
    });
  // attach the above generated HTML to the page
  // then, add the event listener to each button
  ul.innerHTML = newArr.join('');
  // document.querySelectorAll('project').forEach(project => {
  //   project.classList.add('slide-out-to-right');
  // })
  attachSkillEvent();
}

function attachSkillEvent() {
  let skillSelectors = document.querySelectorAll('.skill-selector');
  // cycle through the skill buttons and make it so that
  // they render the associated project for that skill
  skillSelectors.forEach((skill, index, array) => {
    skill.addEventListener('mousedown', function(e) {
      renderSkills(e.target.dataset.id);
      renderProjects(filterProjects(selectedSkill))
      // using the scroll.js function to jump
      // down the page and view the projects
      if (window.scrollY <= 5) {
        scroll(projectsDestination);
      }
    })
  })
}

let renderProjects = function(arr) {
  const 
    projectList = document.querySelector('.list__projects'),
    allProjects = document.querySelectorAll('.project'),
    loader = document.querySelector('.projects #loader');
  // adding the exit animation
  allProjects.forEach((project, index) => {
    // project.classList.remove(`project-enter-${index + 1}`);
    project.classList.add(`project-exit-${index + 1}`);
  })
  // render the HTML necessary for each 
  // project in the given array
setTimeout(function() {
  projectList.innerHTML = arr.map((project, index) => {
    return `
      <li class="project project-enter-${index + 1}">
        <div>
          <div class="project__header-row">
            <p class="section__headline project__name">${project.title}</p>
            <div>
              ${
                project.production_link !== '' 
                ? `            
                <a href="${project.production_link}" target="_blank">
                  <img src="./assets/images/social-icons/production_icon.png" width="32"
                  class="project__github-link">
                </a>` 
                : 
                ''
              }
              ${
                project.github_link !== '' 
                ? `            
                <a href="${project.github_link}" target="_blank">
                  <img src="./assets/images/social-icons/github.png" width="32"
                  class="project__github-link" alt="${project.title} Github Repo">
                </a>` 
                : 
                ''
              }
            </div>
          </div>
          <p class="project__description section__copy">
            ${project.description}
          </p>
          <ul class="project__tech" data-project-name="recordshare">
            ${project.technologies.map(tech => {
              return `<li>${tech}</li>`;
            }).join('')}
          </ul>
        </div>
        <div>
          <img src="${project.image}" alt="${project.title} UI"
            data-project-name="${project.title.toLowerCase()}" class="img project__img">
        </div>
      </li>
    `
  }).join('');
}, 1000)
  document.querySelector('.projects-listed').innerHTML = `
    ${
      arr.length === 1
      ?
      `${arr.length} project listed`
      :
      `${arr.length} projects listed`
    }
  `;
}

let filterProjects = function(query) {
  let newProjectsList = [];
  if (selectedSkill === 'All') {
    return myProjects;
  }
  // if the user wants to display Recent Projects, serve them
  // the first two items in the myProjects array
  if (selectedSkill === 'Recent Projects') {
    return myProjects.filter((item, index) => index < 3);
  }
  // loop over each project
  for (let i = 0; i < myProjects.length; i++) {
    // loop over each technology per project
    for (let t = 0; t < myProjects[i].technologies.length; t++) {
      // if the selected skill button matches a project's
      // technology, then add the project to the array
      if (myProjects[i].technologies[t] === query) {
        newProjectsList.push(myProjects[i]);
      }
    }
  }
  // return the filtered projects list
  return newProjectsList;
}