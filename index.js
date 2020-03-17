const divs = document.querySelectorAll('div');


function logText(e) {
  console.log(this.classList.value);
  e.stopPropagation(); 
  console.log(this);
}

divs.forEach(div => div.addEventListener('click', function() {
  document.querySelector('.one').classList.toggle('four');
  document.querySelector('.three').classList.toggle('five');
}));

divs.addEventListener('click', () => {
  console.log('Click!!!');
}, {
  once: true
});
