const inputFields = document.querySelectorAll('.form-field');
// const inputContainers = document.que

inputFields.forEach(function(field, index, array) {

  field.addEventListener('focusin', function(e) {
    const label = e.target.previousElementSibling;
    const parentElement = e.target.parentElement;
    label.classList.add('form-label__focus');
    // parentElement.classList.add('input-container__hover');
  })

  field.addEventListener('focusout', function(e) {
    const label = e.target.previousElementSibling;
    const parentElement = e.target.parentElement;
    if (e.target.value === '') {
      label.classList.remove('form-label__focus');
      // parentElement.classList.remove('input-container__hover');
    }
  })
})

inputFields.forEach(function(field, index, array) {

})