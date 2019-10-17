var skillBtn = document.getElementById('skill-btn');
var skillsArray = ['JavaScript', 'jQuery', 'HTML/CSS', 'Bootstrap', 'Firebase', 'Adobe Suite'];

skillBtn.addEventListener('click', function() {
    randomSkill(skillsArray)
});

function randomSkill(array) {
    var randomSkill = document.getElementById('random-skill');
    randomSkill.innerHTML = '';
    var skill = array[Math.floor(Math.random() * array.length)];
    var skillNode = document.createTextNode(skill);
    randomSkill.appendChild(skillNode);
    console.log(skill);
}