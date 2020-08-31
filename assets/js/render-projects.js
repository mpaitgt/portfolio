window.onload = async function() {
  await renderSkills(0);
  attachSkillEvent();
  renderProjects(myProjects.filter((item, index) => index < 2)); 
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
      "React.js", "Material UI", "Passport", "Cloudinary", "Node.js & Express"
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
  'PHP',
  'MongoDB',
  'Node.js & Express',
  'Wordpress',
  'Sitecore',
  'Adobe Photoshop',
  'Adobe XD'
];

// =========================
// skill selection
// =========================
let selectedSkill = null;

function renderSkills(num) {
  let newArr = skills.map((skill, index) => {
    if (index == Number.parseInt(num)) {
      selectedSkill = skill;
      return `<li class="skill-selector skill__active" data-id="${index}">${skill}</li>`;
    } else {
      return `<li class="skill-selector skill__inactive" data-id="${index}">${skill}</li>`;
    }
  });
  let ul = document.querySelector('.list__skills');
  ul.innerHTML = newArr.join('');
  attachSkillEvent();
}

function attachSkillEvent() {
  let skillSelectors = document.querySelectorAll('.skill-selector');
  skillSelectors.forEach((skill, index, array) => {
    skill.addEventListener('mousedown', function(e) {
      renderSkills(e.target.dataset.id);
      renderProjects(filterProjects(selectedSkill))
      scroll(projects);
    })
  })
}

// =========================
// project display
// =========================
let renderProjects = function(arr) {
  document.querySelector('.list__projects').innerHTML = arr.map(project => {
    return `
      <li class="project">
        <div>
          <div style="display: flex; justify-content: space-between; align-items: center;">
            <a href="${project.production_link}">
              <p class="section__headline project__name">${project.title}</p>
            </a>
            <a href="${project.github_link}" target="_blank">
              <img src="./assets/images/social-icons/github.png" width="32"
                class="project__github-link" alt="">
            </a>
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
          <img src="${project.image}" alt="Recordshare UI"
            data-project-name="recordshare" class="img img__project">
        </div>
      </li>
    `
  })
}

let filterProjects = function(query) {
  let newProjectsList = [];
  if (selectedSkill === 'Recent Projects') {
    return myProjects.filter((item, index) => index < 2);
  }
  // loop over each project
  for (let i = 0; i < myProjects.length; i++) {
    // loop over each technology per project
    for (let t = 0; t < myProjects[i].technologies.length; t++) {
      if (myProjects[i].technologies[t] === query) {
        newProjectsList.push(myProjects[i]);
      }
    }
  }
  return newProjectsList;
}