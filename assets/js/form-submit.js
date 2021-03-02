document.querySelector('input#submit-btn').addEventListener('click', function(e) {
  e.preventDefault();

  const data = {
    name: document.querySelector('input#name').value,
    email: document.querySelector('input#email').value,
    message: document.querySelector('textarea#message').value
  }

  if (data.name && data.email && data.message) {
    postData('/submit', data)
    .then(() => {
      document.querySelector('form').classList.add('mail-sent');
      setTimeout(() => {
        document.querySelector('form').style.display = '';
        document.querySelector('.thank-you').classList.add('thank-you_visible');
      }, 500);
    })
    .catch(() => {
      document.querySelector('form').classList.add('mail-sent');
      document.querySelector('form').style.display = '';
      document.querySelector('.thank-you').classList.add('thank-you_visible');
    }); 
  } else {
    for (item in data) {
      if (!data[item]) {
        document.getElementById(item).closest('.input-container').classList.add('error');
      }
    }
  }
})

postData = async (url = '', data = {}) => {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
  })
  return response.json();
}