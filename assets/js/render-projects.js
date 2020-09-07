window.onload = async function() {
  await renderSkills(0);
  attachSkillEvent();
  await renderProjects(myProjects.filter((item, index) => index < 2)); 
}

let myProjects = [
  {
    "id": 1,
    "title": "Recordshare",
    "image": "./assets/images/project-images/recordshare.jpg",
    "technologies": [
      "React.js", "MongoDB Atlas", "Emotion", "Cloudinary", "Passport", "Node.js & Express"
    ],
    "description": "Personal MERN-stack project developed to allow people to share the music they love with others, and agregrate audience ratings.",
    "github_link": "https://www.github.com/mpaitgt",
    "production_link": "https://www.recordshare.herokuapp.com"
  },
  {
    "id": 2,
    "title": "Ecohabit",
    "image": "./assets/images/project-images/ecohabit.jpg",
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
    "image": "./assets/images/project-images/eton-controls-image.jpg",
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
    "image": "./assets/images/project-images/eton-controls-image.jpg",
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
    "image": "./assets/images/project-images/deetz.jpg",
    "technologies": [
      "HTML & CSS", "SCSS/SASS", "Handlebars", "MySQL", "Sequelize", "Node.js & Express"
    ],
    "description": "Inspired by my day job, I developed this database mangement software allowing you to gain consistency and accuracy in your data.",
    "github_link": "https://www.github.com/mpaitgt/deetz",
    "production_link": "https://www.deetz.herokuapp.com"
  },
  {
    "id": 6,
    "title": "Give a Gift",
    "image": "./assets/images/project-images/gift.jpg",
    "technologies": [
      "HTML & CSS", "jQuery", "AJAX"
    ],
    "description": "A web app which uses the Giphy API to generate GIFs on request. The user can even store their favorite GIFs locally in the 'Favorites' section.",
    "github_link": "https://www.github.com/mpaitgt/give-a-gift",
    "production_link": "https://mpaitgt.github.io/Give-a-Gift/"
  },
  {
    "id": 7,
    "title": "The Skinny Pancake",
    "image": "./assets/images/project-images/skinny-pancake-logo.png",
    "technologies": [
      "Wordpress"
    ],
    "description": "Worked from January 2015 through June 2016 as Marketing Coordinator developing content and performing web maintinence for four domains.",
    "github_link": "",
    "production_link": ""
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
  'Emotion',
  'MySQL',
  // 'PHP',
  'MongoDB',
  'MongoDB Atlas',
  'Node.js & Express',
  'Wordpress',
  'Sitecore',
  'Email Development',
  'Adobe XD'
  // 'Wordpress',
  // 'Sitecore',
  // 'Adobe Photoshop',
  // 'Adobe XD'
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
  // document.querySelectorAll('project').forEach(project => {console.log(project)
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
      scroll(projectsDestination);
    })
  })
}

let renderProjects = function(arr) {
  const 
    projectList = document.querySelector('.list__projects'),
    allProjects = document.querySelectorAll('.project');
  // adding the exit animation
  allProjects.forEach((project, index) => {
    project.classList.remove(`project-enter-${index + 1}`);
    project.classList.add(`project-exit-${index + 1}`);
  })
  // render the HTML necessary for each 
  // project in the given array
  setTimeout(function() {
    projectList.innerHTML = arr.map((project, index) => {
      return `
        <li class="project project-enter-${index + 1}">
          <div>
            <div style="display: flex; justify-content: space-between; align-items: center;">
              <a href="${project.production_link}" target="_blank">
                <p class="section__headline project__name">${project.title}</p>
              </a>
              ${
                project.github_link !== '' 
                ? `            <a href="${project.github_link}" target="_blank">
                <img src="./assets/images/social-icons/github.png" width="32"
                  class="project__github-link" alt="${project.title} Github Repo">
              </a>` 
                : 
                ''
              }
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
              data-project-name="${project.title.toLowerCase()}" class="img img__project">
          </div>
        </li>
      `
    }).join('');
    // collapseSection(projectList);
  },250);
}

let filterProjects = function(query) {
  let newProjectsList = [];
  // if the user wants to display Recent Projects, serve them
  // the first two items in the myProjects array
  if (selectedSkill === 'Recent Projects') {
    return myProjects.filter((item, index) => index < 2);
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