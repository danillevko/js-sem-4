// const parent = document.querySelector('#parent');
// const child = document.querySelector('#child');
// const btn = document.querySelector('#btn');
// parent.addEventListener('click', ()=>{
//     console.log('parent');
// });
// child.addEventListener('click', ()=>{
//     console.log('child');
// });
// btn.addEventListener('click', ()=>{
//     console.log('btn');
// });

const userList = document.getElementById('userList');


function deleteUser(event) {
    const button = event.target.closest('.deleteButton');
    if(!button) return;
    const li = button.closest('li');
    li.remove();
}
userList.addEventListener('click', deleteUser);