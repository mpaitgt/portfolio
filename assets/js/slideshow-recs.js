const myTestimonials = [
  {
    "id": "1",
    "quote": "Matt is great to work with, delivers exactly what he promises and is very responsive!",
    "author": "Rebekah Leo",
    "company": "Owner",
    "image": "./assets/images/recs/tfiy-logo.png"
  }, 
  {
    "id": "1",
    "quote": "Matt is great to work with, delivers exactly what he promises and is very responsive!",
    "author": "Rebekah Leo",
    "company": "Owner",
    "image": "./assets/images/recs/tfiy-logo.png"
  }, 
  // {
  //   "id": "2",
  //   "quote": "He's really creative. He always makes sure to be honest with you and earn your trust.",
  //   "author": "Pat Morin",
  //   "company": "Software Engineer",
  //   "image": "./assets/images/recs/tfiy-logo.png"
  // }, 
  // {
  //   "id": "2",
  //   "quote": "Easy to work with designer, well spoken, and knows his stuff.",
  //   "author": "Alex Chisolm",
  //   "company": "Software Engineer",
  //   "image": "./assets/images/recs/tfiy-logo.png"
  // }, 
];
let selectedTestimonial = myTestimonials[0];

async function renderQuote(testimonial) {
  const testimonialContainer = document.querySelector('.recommendations .container');  

  testimonialContainer.innerHTML = await `
    <div class="quote__layout">
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

  document.querySelector('.quote').addEventListener('click', function() {
    selectRandomQuote(myTestimonials);
  });

  document.querySelector('.quote').addEventListener('mousemove', function(e) {
    // document.querySelector('.left-mark').style.transform = `translate(${e.clientX / 8}px, ${e.clientY / 12}px)`;
    // document.querySelector('.right-mark').style.transform = `translate(-${e.clientX / 8}px, -${e.clientY / 12}px)`;
  })

  document.querySelector('.quote').addEventListener('mouseleave', function(e) {
    // document.querySelector('.left-mark').style.transform = 'translateX(0px)';
    // document.querySelector('.right-mark').style.transform = 'translateX(0px)';
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

