// document.querySelector('.bandcamp').addEventListener('mousemove', function(e) {
//   let x = e.offsetX;
//   let y = e.offsetY;
//   console.log(x,y);
//   e.target.style.boxShadow = `${x}px ${y}px 0px 20px rgba(0,0,0,1);`;
// });

document.querySelectorAll('.job-wrapper').forEach(function(item, index, array) {
  item.addEventListener('click', function(e) {
    let desc = item.querySelector('.job-description');
    console.log(desc)
    if (desc.style.display === 'block') {
      desc.style.display = 'none'
    } else {
      desc.style.display = 'block'
    }
  });
});

// function toggleStyle 