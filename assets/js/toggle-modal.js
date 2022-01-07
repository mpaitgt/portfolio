const modal = document.getElementById('album-modal');
let modalButtons = document.querySelectorAll('.album-cover');
let selectedAlbum;

modalButtons.forEach(btn => {
  btn.addEventListener('mouseup', validateModalAction);

  btn.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' || e.keyCode === 13) {
      validateModalAction(e);
    }
  })
})

document.addEventListener('mouseup', function (e) {
  let
    iFrame = document.getElementById('album-iframe'),
    loader = document.getElementById('loader');

  // if the modal is clicked, close it 
  // and add the modal close animation
  if (e.target == modal) {
    loader.style.display = 'none';
    iFrame.classList.add('modal-close');
    // wait two seconds before hiding the modal and 
    // removing the open animation class from the iframe
    setTimeout(function () {
      modal.style.display = 'none';
      iFrame.classList.remove('modal-open');
    }, 250);

  }
})

function selectTheAlbum(dataName) {
  let iFrame = document.getElementById('album-iframe');
  selectedAlbum = dataName;

  // Suck Up All Your Guts
  if (dataName === 'suck-up') {
    iFrame.src = 'https://bandcamp.com/EmbeddedPlayer/album=2646207013/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=true/transparent=true/';
    iFrame.firstChild.href = 'http://mattpignatore.bandcamp.com/album/suck-up-all-your-guts';
    iFrame.firstChild.innerText = 'Suck Up All Your Guts by Matt Pignatore';
    iFrame.dataset.name = 'suck-up';

    // Demos (2016)
  } else if (dataName === 'demos-2016') {
    iFrame.src = 'https://bandcamp.com/EmbeddedPlayer/album=3186507886/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=true/transparent=true/';
    iFrame.firstChild.href = 'http://mattpignatore.bandcamp.com/album/demos-2016';
    iFrame.firstChild.innerText = 'Demos (2016) by Matt Pignatore';
    iFrame.dataset.name = 'demos-2016';

    // Go Get Hurt
  } else if (dataName === 'go-get-hurt') {
    iFrame.src = 'https://bandcamp.com/EmbeddedPlayer/album=1512032327/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=true/transparent=true/';
    iFrame.firstChild.href = 'http://mattpignatore.bandcamp.com/album/go-get-hurt';
    iFrame.firstChild.innerText = 'Go Get Hurt by Matt Pignatore';
    iFrame.dataset.name = 'go-get-hurt';

    // At Any Moment
  } else if (dataName === 'at-any-moment') {
    iFrame.src = 'https://bandcamp.com/EmbeddedPlayer/album=2636136889/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=true/transparent=true/';
    iFrame.firstChild.href = 'http://mattpignatore.bandcamp.com/album/i-thought-i-would-start-to-feel-more-whole-at-any-moment';
    iFrame.firstChild.innerText = 'At Any Moment by Matt Pignatore';
    iFrame.dataset.name = 'at-any-moment';
  }
}

function validateModalAction(e) {
  let
    iFrame = document.getElementById('album-iframe'),
    loader = document.querySelector('#album-modal #loader');
  // if the element was opened before and still 
  // has the close animation class, remove it
  if (iFrame.classList.contains('modal-close')) {
    iFrame.classList.remove('modal-close');
  }
  // if this is a new album being opened, 
  // hide the iframe and use the loader
  if (e.target.dataset.name !== iFrame.dataset.name) {
    selectTheAlbum(e.target.dataset.name);
    modal.style.display = 'block';
    loader.style.display = 'block';
    // wait two seconds and remove the loader
    // from view, and attach the modal open animation
    setTimeout(function () {
      loader.style.display = 'none';
      iFrame.classList.add('modal-open');
    }, 2000);
    // if this album was the last one opened, or
    // if this album is currently playing
  } else {
    modal.style.display = 'block';
    iFrame.classList.add('modal-open');
  }
}