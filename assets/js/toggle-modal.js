const modal = document.getElementById('album-modal');
let modalButtons = document.querySelectorAll('.album-cover');

modalButtons.forEach(btn => {
  let iFrame = document.getElementById('album-iframe');
  btn.addEventListener('mouseup', function(e) {
    if (e.target.dataset.name === 'suck-up') {
        iFrame.src = 'https://bandcamp.com/EmbeddedPlayer/album=2646207013/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=true/transparent=true/';
        iFrame.firstChild.href = 'http://mattpignatore.bandcamp.com/album/suck-up-all-your-guts';
        iFrame.firstChild.innerText = 'Suck Up All Your Guts by Matt Pignatore';
    } else if (e.target.dataset.name === 'demos-2016') {
        iFrame.src = 'https://bandcamp.com/EmbeddedPlayer/album=3186507886/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=true/transparent=true/';
        iFrame.firstChild.href = 'http://mattpignatore.bandcamp.com/album/demos-2016';
        iFrame.firstChild.innerText = 'Demos (2016) by Matt Pignatore';
    } else if (e.target.dataset.name === 'go-get-hurt') {
        iFrame.src = 'https://bandcamp.com/EmbeddedPlayer/album=1512032327/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=true/transparent=true/';
        iFrame.firstChild.href = 'http://mattpignatore.bandcamp.com/album/go-get-hurt';
        iFrame.firstChild.innerText = 'Go Get Hurt by Matt Pignatore';
    } else if (e.target.dataset.name === 'at-any-moment') {
        iFrame.src = 'https://bandcamp.com/EmbeddedPlayer/album=2636136889/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=true/transparent=true/';
        iFrame.firstChild.href = 'http://mattpignatore.bandcamp.com/album/i-thought-i-would-start-to-feel-more-whole-at-any-moment';
        iFrame.firstChild.innerText = 'At Any Moment by Matt Pignatore';
    }
    modal.style.display = 'block';
  })
})

document.addEventListener('mouseup', function(e) {
  if (e.target == modal) {
    modal.style.display = 'none';
  }
})