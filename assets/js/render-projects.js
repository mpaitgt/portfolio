window.onload = async function() {
  await renderSkills(0);
  attachSkillEvent();
  await renderJobs(myJobs);
  attachShowEvent();
  await renderProjects(myProjects.filter((item, index) => index < 3)); 
}

let myProjects = [
  // {
  //   "id": 1,
  //   "title": "Recordshare",
  //   "image": "./assets/images/project-images/recordshare.JPG",
  //   "technologies": [
  //     "React.js", "MongoDB Atlas", "Emotion.css", "Cloudinary", "Passport", "Node.js & Express"
  //   ],
  //   "description": "Personal MERN-stack project developed to allow people to share the music they love with others, and agregrate audience ratings.",
  //   "github_link": "https://www.github.com/mpaitgt/recordshare",
  //   "production_link": "https://www.recordshare.herokuapp.com"
  // },
  {
    "id": 101,
    "title": "Alternative Dough",
    "image": "./assets/images/project-images/alt-dough.JPG",
    "technologies": [
      "React.js", "Emotion.css", "Webpack"
    ],
    "description": "Gluten-free baking is best when you're using the right mix of flours. That's why I created this flour calculator with React, allowing users to quickly generate custom flour blends.",
    "github_link": "https://www.github.com/mpaitgt/alt-dough-flour-calculator",
    "production_link": "https://www.alternativedough.com"
  },
  {
    "id": 1011,
    "title": "Drum Machine",
    "image": "./assets/images/project-images/drum-machine.JPG",
    "technologies": [
      "HTML & CSS", "SCSS/SASS"
    ],
    "description": "Writing and producing music was my first passion - so naturally I couldn't help sampling some of the songs I've written to create this drum machine.",
    "github_link": "https://www.github.com/mpaitgt/drum-machine",
    "production_link": "https://mpaitgt.github.io/drum-machine/"
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
    "id": 8,
    "title": "Medo",
    "image": "./assets/images/project-images/medo.JPG",
    "technologies": [
      "HTML & CSS", "JavaScript", "jQuery", "Animate.css", "Firebase", "Moment.js"
    ],
    "description": "It's the age of content, and we've all got too many recommendations from friends. Allow Medo to be the central place where you can organize all of those things you've been meaning to check out!",
    "github_link": "https://www.github.com/mpaitgt/medo-frontend",
    "production_link": "https://mpaitgt.github.io/medo-frontend"
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
  'Node.js & Express'
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
                  class="project__link">
                </a>` 
                : 
                ''
              }
              ${
                project.github_link !== '' 
                ? `            
                <a href="${project.github_link}" target="_blank">
                  <img src="./assets/images/social-icons/github.png" width="32"
                  class="project__link" alt="${project.title} Github Repo">
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
}, 1000);

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