// const target = document.querySelector('.appear');
// const options = {
//     root: null,
//     threshold: 0.1,
//     rootMargin: '0px'
// }
// const observer = new IntersectionObserver(entries=>{
//     for(const entry of entries){
//         target.classList.toggle('box', entry.isIntersecting);
//     }
// }, options);
// observer.observe(target);

const target = document.querySelectorAll('.appear');
const options = {threshold: 0.3}
const observer = new IntersectionObserver(entries=>{
    for(let entry of entries){
        entry.target.classList.toggle('box', entry.isIntersecting);
    }
}, options);
target.forEach(target => observer.observe(target));