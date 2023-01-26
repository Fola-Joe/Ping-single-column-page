const btn = document.querySelector('button');
const input = document.querySelector('#email');

let inputMsg = input.value;

if (inputMsg = "") {
    btn.addEventListener('click', () => {
        prompt('input something!');
    })
}