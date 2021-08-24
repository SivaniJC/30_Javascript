// const panels = [
//     ...document.querySelectorAll('.panel'),
// ];

// const toggleOpen = event => event.target.classList.toggle('open');
// const toggleOpenActive = event => 
//     event.propertyName.includes('flex') ? event.target.classList.toggle('open-active'):
//     null;

// panels.map(panel => panel.addEventListener('click', toggleOpen));
// panels.map(panel => panel.addEventListener('transitionend', toggleOpenActive));

const panels = document.querySelectorAll('.panel');

function toggleOpen() {
  console.log('Hello');
  this.classList.toggle('open');
}

function toggleActive(e) {
  console.log(e.propertyName);
  if (e.propertyName.includes('flex')) {
    this.classList.toggle('open-active');
  }
}

panels.forEach(panel => panel.addEventListener('click', toggleOpen));
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));
