var skillBtn = document.getElementById('skill-btn');
var pickedSkill = document.getElementById('random-skill');
var skillsArray = ['JavaScript', 'jQuery', 'HTML/CSS', 'Bootstrap', 'Firebase', 'Adobe Suite'];

skillBtn.addEventListener('mouseup', function() {
    randomSkill(skillsArray)
});

skillBtn.addEventListener('mousedown', function() {
    pickedSkill.removeAttribute('class');
});

// document.onload = function() {
//     body.setAttribute('class', 'onload');
// }

function randomSkill(array) {
    if (array.length === 0) {
        pickedSkill.style.fontSize = '72px';
        pickedSkill.innerHTML = 'Scroll down to see my work';
    } else {
        pickedSkill.innerHTML = '';
        pickedIndex = Math.floor(Math.random() * array.length)
        var skill = array[pickedIndex];
        var skillNode = document.createTextNode(skill);
        pickedSkill.appendChild(skillNode);
        pickedSkill.setAttribute('class', 'enter');
        array.splice(pickedIndex, 1);
    }
}