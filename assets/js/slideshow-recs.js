const myTestimonials = [
  {
    "id": "1",
    "quote": "Matt is great to work with, delivers exactly what he promises and is very responsive!",
    "author": "Rebekah Leo",
    "company": "Owner",
    "image": "./assets/images/recs/tfiy-logo.png"
  }, 
  {
    "id": "2",
    "quote": "Easy to work with designer, well spoken, and knows his stuff.",
    "author": "Alex Chisolm",
    "company": "Software Engineer",
    "image": "./assets/images/recs/bearclaw-logo.png"
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
          <img class="quote-author-photo" src="${testimonial.image}" alt="">
      </div>
    </div>
  `;

  document.querySelector('.quote__layout').addEventListener('mousedown', function() {
    this.classList.remove('quote__mouse-up');
    this.classList.add('quote__mouse-down');
  })

  document.querySelector('.quote').addEventListener('mouseup', function() {
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

renderQuote(selectedTestimonial);