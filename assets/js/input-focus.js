const inputFields = document.querySelectorAll('.form-field');

inputFields.forEach(function(field, index, array) {

  field.addEventListener('focusin', function(e) {
    const label = e.target.previousElementSibling;
    label.classList.add('form-label__focus');
  })

  field.addEventListener('focusout', function(e) {
    const label = e.target.previousElementSibling;
    if (e.target.value === '') {
      label.classList.remove('form-label__focus');
    }
  })

  field.addEventListener('keyup', function(e) {
    if (array[0].value !== '' && array[1].value !== '' && array[2].value !== '') {
      document.getElementById('submit-btn').style.opacity = '1';
      document.getElementById('submit-btn').style.cursor = 'pointer';
    } else {
      document.getElementById('submit-btn').style.opacity = '0.4';
      document.getElementById('submit-btn').style.cursor = 'default';
    }
  })

});
