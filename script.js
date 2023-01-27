const btn = document.querySelector('button');
const input = document.querySelector('#email');
const error = document.querySelector('.warning');

btn.addEventListener('click', ()=> {
    const err = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!err.test(input.value.toLowerCase())){
        error.style.display = 'block';
        input.style.borderColor = 'hsl(354, 100%, 66%)';
    } else {
        error.style.display = 'none';
        input.style.borderColor = 'hsl(223, 100%, 88%)'
    }
    input.value = '';
})