let myProjects = [
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
      "HTML & CSS", "SCSS", "JavaScript"
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
    "id": 2876,
    "title": "Placespace",
    "image": "./assets/images/project-images/placespace.JPG",
    "technologies": [
      "Gatsby", "React.js", "Tailwind CSS", "Contentful CMS"
    ],
    "description": "A simple Gatsby app which makes use of the Contenful headless CMS, providing weather for users.",
    "github_link": "https://www.github.com/mpaitgt/justweather",
    "production_link": "https://www.placespace.netlify.app"
  },
  {
    "id": 2,
    "title": "Quote Generator",
    "image": "./assets/images/project-images/quote-generator.JPG",
    "technologies": [
      "React.js"
    ],
    "description": "A quote machine to go along with one of my favorite records, Dogrel by Fontaines D.C.",
    "github_link": "https://github.com/mpaitgt/Fontaines-Quote-Machinations",
    "production_link": "https://mpaitgt.github.io/Fontaines-Quote-Machinations/"
  },
  {
    "id": 1245,
    "title": "Bearclaw",
    "image": "./assets/images/project-images/bearclaw.JPG",
    "technologies": [
      "HTML & CSS", "SCSS", "jQuery", "PHP", "MySQL"
    ],
    "description": "A UI design job that I'm currently on. You can read more about this above in the work section.",
    "github_link": "",
    "production_link": ""
  },
  {
    "id": 8765432,
    "title": "The Floor Is Yours",
    "image": "./assets/images/project-images/tfiy.JPG",
    "technologies": [
      "React.js", "Material UI", "Node.js/Express", "Nodemailer"
    ],
    "description": "A freelance site that I built for a local business. You can read more about this above in the work section.",
    "github_link": "https://github.com/mpaitgt/tfiy",
    "production_link": "https://tfiy.herokuapp.com"
  },
  {
    "id": 200,
    "title": "Record Store Shopping",
    "image": "./assets/images/project-images/record-store-shopping.JPG",
    "technologies": [
      "React.js"
    ],
    "description": "My first React app! This is a simple game where the goal is to select all of the records...but don\'t select any more than once!",
    "github_link": "https://github.com/mpaitgt/clicky",
    "production_link": "https://mpaitgt.github.io/clicky/"
  },
  {
    "id": 235,
    "title": "Give a GIF",
    "image": "./assets/images/project-images/give-a-gif.JPG",
    "technologies": [
      "HTML & CSS", "JavaScript", "jQuery"
    ],
    "description": "A web application which uses the Giphy API to generate GIFs on request, where the user can store their favorite GIFs in the local storage.",
    "github_link": "https://github.com/mpaitgt/Give-a-Gift",
    "production_link": "https://mpaitgt.github.io/Give-a-Gift/"
  },
  {
    "id": 5,
    "title": "Deetz",
    "image": "./assets/images/project-images/deetz.JPG",
    "technologies": [
      "HTML & CSS", "jQuery", "JavaScript", "SCSS", "Handlebars", "MySQL", "Sequelize", "Node.js & Express"
    ],
    "description": "Inspired by my day job, I developed this database mangement software allowing you to gain consistency and accuracy in your data.",
    "github_link": "https://www.github.com/mpaitgt/deetz",
    "production_link": "https://www.deetz-app.herokuapp.com"
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
  'SCSS',
  'JavaScript',
  'React.js',
  'Gatsby',
  'Material UI',
  'jQuery',
  'PHP',
  'MySQL',
  'MongoDB',
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
      renderProjects(filterProjects(selectedSkill));
      // using the scroll.js function to jump
      // down the page and view the projects
      if (window.scrollY <= 5) {
        scroll(projectsDestination);
      }
    })
  })
}

let renderProjects = function(arr, onload = false) {
  const 
    projectList = document.querySelector('.list__projects'),
    allProjects = document.querySelectorAll('.project'),
    loader = document.querySelector('.projects #loader');
  // adding the exit animation
  allProjects.forEach((project, index) => {
    // project.classList.remove(`project-enter-${index + 1}`);
    if (!onload) {
      project.classList.add(`project-exit-${index + 1}`);
    }
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
      `${arr.length} of ${myProjects.length} project listed`
      :
      `${arr.length} of ${myProjects.length} projects listed`
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