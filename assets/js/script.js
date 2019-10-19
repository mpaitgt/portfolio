// GLOBAL VARIABLES
var skillBtn = document.getElementById('skill-btn');
var pickedCat = document.getElementById('random-category');
var skillsArray = ['JavaScript', 'jQuery', 'HTML/CSS', 'Bootstrap', 'Firebase', 'Adobe Suite'];
var interestsArray = ['Gluten-Free Baking', 'Songwriting / Producing', 'Film / Television', 'Home Cooking']
    
document.querySelectorAll('.button').forEach(function(buttonSelect) {
    buttonSelect.addEventListener('mouseup', function() {
        if (this.innerText === 'Skills') {
            randomSkill(skillsArray);
        } else {
            randomInterest(interestsArray);
        }        
    });
});

document.querySelectorAll('.button').forEach(function(buttonSelect) {
    buttonSelect.addEventListener('mousedown', function() {
        pickedCat.removeAttribute('class');
    });
});

document.querySelectorAll('.hover-function').forEach(function(dataClass) {
    dataClass.addEventListener('mouseover', displayLink)
});


// FUNCTIONS
function displayLink() {
    var linkBox = document.getElementById('link-box');
    var newLink = document.createElement('h1');
    var newHREF = this.getAttribute('href');
    console.log(this);
    console.log(newHREF);

    while (linkBox.firstChild) {
        linkBox.removeChild(linkBox.firstChild);
        }

    newLink.innerText = newHREF;
    newLink.setAttribute('class', 'hover-link enter');
    linkBox.appendChild(newLink);    
}

function randomSkill(array) {
    if (array.length === 0) {
        pickedCat.style.fontSize = '72px';
        pickedCat.innerHTML = 'Scroll down to see my work';
    } else {
        pickedCat.innerHTML = '';
        pickedIndex = Math.floor(Math.random() * array.length)
        var skill = array[pickedIndex];
        var skillNode = document.createTextNode(skill);
        pickedCat.appendChild(skillNode);
        pickedCat.setAttribute('class', 'enter');
        array.splice(pickedIndex, 1);
    }
}

function randomInterest(array) {
    if (array.length === 0) {
        pickedCat.style.fontSize = '72px';
        pickedCat.innerHTML = 'Scroll down to see my what more I do';
    } else {
        pickedCat.innerHTML = '';
        pickedIndex = Math.floor(Math.random() * array.length)
        var interest = array[pickedIndex];
        var catNode = document.createTextNode(interest);
        pickedCat.appendChild(catNode);
        pickedCat.setAttribute('class', 'enter');
        array.splice(pickedIndex, 1);
    }
}

var request = new XMLHttpRequest();
request.open('GET', 'https://api.instagram.com/oembed/?url=http://instagr.am/p/B273pMvpvsc/', true);

request.onload = function(data) {
  if (this.status >= 200 && this.status < 400) {
//     // Success!
  var resp = this.data;
  console.log(data);
} else {
  // We reached our target server, but it returned an error

}
};

// request.onerror = function() {
//   // There was a connection error of some sort
// };

// request.send();