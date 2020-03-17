const divs = document.querySelectorAll('div');


function logText(e) {
  console.log(this.classList.value);
  e.stopPropagation(); 
  console.log(this);
}

divs.forEach(div => div.addEventListener('click', function() {
  document.querySelector('.one').classList.toggle('four');
  document.querySelector('.three').classList.toggle('five');
  document.querySelector('.two').classList.toggle('four');
  document.querySelector('.five').classList.toggle('six');
  document.querySelector('.four').classList.toggle('seven');
  document.querySelector('.six').classList.toggle('eight');
  document.querySelector('.eight').classList.toggle('nine');
  document.querySelector('.seven').classList.toggle('ten');
  document.querySelector('.nine').classList.toggle('eleven');
}));

divs.addEventListener('click', () => {
  console.log('Click!!!');
}, {
  once: true
});
