const divs = document.querySelectorAll('div');


function logText(e) {
  console.log(this.classList.value);
  e.stopPropagation(); 
  console.log(this);
}

divs.forEach(div => div.addEventListener('click', function() {
  document.querySelector('.one').classList.toggle('four');
  document.querySelector('.three').classList.toggle('five');
  document.querySelector('.five').classList.toggle('six');
  document.querySelector('.six').classList.toggle('four');
  document.querySelector('.four').classList.toggle('seven');
  document.querySelector('.two').classList.toggle('eight');
  document.querySelector('.eight').classList.toggle('nine');
  document.querySelector('.seven').classList.toggle('ten');
  document.querySelector('.nine').classList.toggle('eleven');
}));

divs.addEventListener('click', () => {
  console.log('Click!!!');
}, {
  once: true
});
