// const home = document.getElementById('home');
// let project = document.querySelectorAll('.project-item');
// let description = document.querySelectorAll('.project-description');
// let link = document.querySelectorAll('.link');
// let view = false;

// link.forEach(link => {
//     link.addEventListener('click', () => {
//         switch(link.textContent) {
//             case 'Matt Pignatore':
//                 hideBox();
//                 let homeimage = document.getElementById('home-img');
//                 homeimage.style.display = 'block';
//                 break;
//             case 'About':
//                 hideBox();
//                 let aboutContent = document.getElementById('about');
//                 aboutContent.style.display = 'block';
//                 break;
//             case 'Projects':
//                 hideBox();
//                 let workContent = document.getElementById('work');
//                 workContent.style.display = 'block';
//                 break;
//             case 'Skills':
//                 hideBox();
//                 let skillsContent = document.getElementById('skills');
//                 skillsContent.style.display = 'block';
//                 break;
//             case 'Resume':
//                 break;
//             case 'Contact':
//                 hideBox();
//                 let contactContent = document.getElementById('contact');
//                 contactContent.style.display = 'block';
//                 break;
//             default:
//                 console.log('none of the above');
//         }
//     })
// })

// project.forEach(project => {
//     project.addEventListener('click', e => {
//         let content = document.querySelector(`p[data-ref="${e.target.textContent}"]`);
//         if (view) {
//             console.log(content);
//             setTimeout(function() { content.style.display = 'block' }, 1);
//             content.classList.remove('remove-animated-content');
//             content.classList.add('add-animated-content');
//             view = true;
//         } else {
//             console.log(content);
//             content.classList.add('remove-animated-content');
//             setTimeout(function() { content.style.display = 'none' }, 500);
//             content.classList.remove('add-animated-content');
//             view = false;
//         }
//     })
// })

// function hideBox() {
//     let homeimage = document.getElementById('home-img');
//     let boxClass = document.getElementsByClassName('box');

//     if (homeimage.style.display = 'block') {
//         homeimage.style.display = 'none';
//     }
//     for (var i = 0; i < boxClass.length; i++) {
//         boxClass[i].style.display = 'none';
//     }
// }

const about = document.querySelector('.about');
const work = document.querySelector('.work');
const interests = document.querySelector('.interests');
let link = document.querySelectorAll('.link');

link.forEach(target => {
    target.addEventListener('click', () => {
        console.log(target.textContent);
        switch(target.textContent) {
            case 'About':
                scroll(about);
                break;
            case 'Projects':
                scroll(work);
                break;
            case 'Interests':
                scroll(interests);
                break;
            default:
                break;
        }
    })
})

scroll = target => {
    target.scrollIntoView({ 
        behavior: 'smooth' 
      }, 500);
}
