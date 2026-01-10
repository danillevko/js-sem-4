const range = document.querySelector('.slider__input');
const img = document.querySelector('.slider__image');

let lastValue = range.value;

range.addEventListener('change', () => {
  if (range.value !== lastValue) {
    img.style.width = range.value * 3 + 'px';
    lastValue = range.value;
  }
});