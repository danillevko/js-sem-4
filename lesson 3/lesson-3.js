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

// const target = document.querySelectorAll('.appear');
// const options = {threshold: 0.3}
// const observer = new IntersectionObserver(entries=>{
//     for(let entry of entries){
//         entry.target.classList.toggle('box', entry.isIntersecting);
//     }
// }, options);
// target.forEach(target => observer.observe(target));

// const targets = document.querySelectorAll('img[data-src]');
// const object = {threshold: 0.8}
// const visual = new IntersectionObserver((entries, obs)=>{
//     for(let entry of entries){
//         let img = entry.target
//         if(entry.isIntersecting && entry.intersectionRatio >= 0.8){
//             img.src = img.dataset.src;
//             img.classList.add('img-apprear');
//             img.removeAttribute('data-src');
//             obs.unobserve(img);
//          }
//     }
// }, object);
// targets.forEach(target => visual.observe(target));




const images = document.querySelectorAll('img[data-src]');
const object = {threshold: 0.5}
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const img = entry.target;
        img.src = img.dataset.src;
        observer.unobserve(img);
    });
}, object);
images.forEach(img => observer.observe(img));
