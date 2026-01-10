const input = document.querySelector('#input');
// const result = _.add(1, 3);
// console.log(result);

// window.addEventListener('scroll', _.throttle(()=>{
//     console.log('scroll');
// }, 30000));

// const input = document.querySelector('#input');
// input.addEventListener('input', _.debounce(()=>{
//     console.log('input');
// }, 1000))


// window.addEventListener('mousemove', _.debounce(alo, 1000));

// function alo(){
//     console.log('alo');
// };

// input.addEventListener('input', _.throttle(ip, 3000));

// function ip(){
//     console.log('ip');
// }

// input.addEventListener('input', _.debounce(()=>{
//     alert(`Hello ${input.value}`);
// }, 2500));


const graph = document.querySelector('#graph');
const circle = document.querySelector('#point');
graph.addEventListener('mousemove', _.throttle((event)=>{
    let rect = graph.getBoundingClientRect();
    let coordsX = event.clientX - rect.left;
    let coordsY = event.clientY - rect.top;
    circle.setAttribute('cx', coordsX);
    circle.setAttribute('cy', coordsY);
}, 0))
