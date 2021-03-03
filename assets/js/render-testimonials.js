const myTestimonials = [
  {
    "id": "3",
    "quote": "Testimonials coming soon...click for some random quotes.",
    "author": "",
    "company": "",
    "image": ""
  }, 
  {
    "id": "1",
    "quote": "\"You miss 100% of the shots you don't take\" - Wayne Gretzy",
    "author": "Michael Scott",
    "company": "Dunder Mifflin",
    "image": "https://i.pinimg.com/474x/c4/10/5a/c4105ad7ef5aac4ff95fafe3e1920f13.jpg"
  }, 
  {
    "id": "2",
    "quote": "You were the Chosen One! It was said that you would destroy the Sith, not join them!",
    "author": "Obi Wan Kenobi",
    "company": "Jedi Council",
    "image": "https://upload.wikimedia.org/wikipedia/commons/2/29/Embl%C3%A8me_de_l%27Ordre_Jedi.svg"
  }, 
];

let selectedTestimonial = myTestimonials[0];

async function renderQuote(testimonial) {
  const testimonialContainer = document.querySelector('.recommendations-container');  

  testimonialContainer.innerHTML = await `
    <div class="quote__layout quote__mouse-up">
      <div style="display: flex; flex-direction: row; justify-content: center;">
        <div class="left-mark">&#10077;</div>
        <p class="quote">
          ${testimonial.quote}
        </p>
        <div class="right-mark">&#10078;</div>
      </div>
      <div class="outer-quote-container">
        <div class="inner-quote-container">
          <p class="quote-author">
            ${testimonial.author}
            <br><span>${testimonial.company}</span>
          </p>
          <img class="quote-author-photo" style="width: 120px !important;" src="${testimonial.image}" alt="">
      </div>
    </div>
  `;

  document.querySelector('.quote__layout').addEventListener('mousedown', function() {
    this.classList.remove('quote__mouse-up');
    this.classList.add('quote__mouse-down');
  })

  document.querySelector('.quote__layout').addEventListener('mouseup', function() {
    selectRandomQuote(myTestimonials);
  })
}

function selectRandomQuote(arr) {
  let randomIndex = Math.floor(Math.random() * arr.length);
  if (arr.indexOf(selectedTestimonial) === randomIndex) {
    selectRandomQuote(arr);
  } else {
    selectedTestimonial = arr[randomIndex];
    renderQuote(selectedTestimonial);
  }
}