const home = document.getElementById('home');
let project = document.querySelectorAll('.project-img');
let description = document.querySelectorAll('.project-description');
let link = document.querySelectorAll('.link');

// home.addEventListener('click', function() {
//     hideBox();
//     var aboutContent = document.getElementById('home');
//     homeimage.style.display = 'block';
// });

link.forEach(link => {
    link.addEventListener('click', () => {
        hideBox();
        switch(link.textContent) {
            case 'Matt Pignatore':
                let homeimage = document.getElementById('home-img');
                homeimage.style.display = 'block';
                break;
            case 'About':
                let aboutContent = document.getElementById('about');
                aboutContent.style.display = 'block';
                break;
            case 'Projects':
                let workContent = document.getElementById('work');
                workContent.style.display = 'block';
                break;
            case 'Skills':
                let skillsContent = document.getElementById('skills');
                skillsContent.style.display = 'block';
                break;
            case 'Contact':
                let contactContent = document.getElementById('contact');
                contactContent.style.display = 'block';
                break;
            default:
                console.log('none of the above');
        }
    })
})

project.forEach(project => {
    project.addEventListener('mouseover', () => {
        let desc = document.querySelector('p[data-ref="medo"]');
        desc.classList.add('description');
        // setTimeout(function() { desc.style.display = 'block' }, 100);
    })
    project.addEventListener('mouseout', () => {
        let desc = document.querySelector('p[data-ref="medo"]');
        // desc.classList.add('description');
        // setTimeout(function() { desc.style.display = 'none' }, 100);
    })
})


function hideBox() {
    let homeimage = document.getElementById('home-img');
    let boxClass = document.getElementsByClassName('box');

    if (homeimage.style.display = 'block') {
        homeimage.style.display = 'none';
    }
    for (var i = 0; i < boxClass.length; i++) {
        boxClass[i].style.display = 'none';
    }
}

