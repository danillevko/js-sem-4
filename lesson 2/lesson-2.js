// const result = _.add(1, 3);
// console.log(result);

// window.addEventListener('scroll', _.throttle(()=>{
//     console.log('scroll');
// }, 30000));

// const input = document.querySelector('#input');
// input.addEventListener('input', _.debounce(()=>{
//     console.log('input');
// }, 1000))


window.addEventListener('mousemove', _.debounce(alo, 1000));

function alo(){
    console.log('alo');
};