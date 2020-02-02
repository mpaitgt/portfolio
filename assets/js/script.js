const home = document.getElementById('home');
let project = document.querySelectorAll('.project-item');
let description = document.querySelectorAll('.project-description');
let link = document.querySelectorAll('.link');

link.forEach(link => {
    link.addEventListener('click', () => {
        switch(link.textContent) {
            case 'Matt Pignatore':
                hideBox();
                let homeimage = document.getElementById('home-img');
                homeimage.style.display = 'block';
                break;
            case 'About':
                hideBox();
                let aboutContent = document.getElementById('about');
                aboutContent.style.display = 'block';
                break;
            case 'Projects':
                hideBox();
                let workContent = document.getElementById('work');
                workContent.style.display = 'block';
                break;
            case 'Skills':
                hideBox();
                let skillsContent = document.getElementById('skills');
                skillsContent.style.display = 'block';
                break;
            case 'Resume':
                break;
            case 'Contact':
                hideBox();
                let contactContent = document.getElementById('contact');
                contactContent.style.display = 'block';
                break;
            default:
                console.log('none of the above');
        }
    })
})

project.forEach(project => {

    project.addEventListener('mouseover', e => {
        let content = document.querySelector(`p[data-ref="${e.target.textContent}"]`);
        setTimeout(function() { content.style.display = 'block' }, 1);
        content.classList.remove('remove-animated-content');
        content.classList.add('add-animated-content');
    })

    project.addEventListener('mouseout', e => {
        let content = document.querySelector(`p[data-ref="${e.target.textContent}"]`);
        
        content.classList.add('remove-animated-content');
        
        setTimeout(function() { content.style.display = 'none' }, 500);
        content.classList.remove('add-animated-content');
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

