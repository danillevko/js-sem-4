const range = document.querySelector('.slider__input');
const img = document.querySelector('.slider__image');

let lastValue = range.value;

range.addEventListener('change', _.debounce(() => {
  if (range.value !== lastValue) {
    img.style.width = range.value * 3 + 'px';
    lastValue = range.value;
  }
}, 100));


const box = document.querySelector('#box');
const svg = document.querySelector('svg')
svg.addEventListener('mousemove', _.debounce((event)=>{
    let rect = svg.getBoundingClientRect();
    let coordsX = event.clientX - rect.left;
    let coordsY = event.clientY - rect.top;
    box.setAttribute('cx', coordsX);
    box.setAttribute('cy', coordsY);
}, 15));