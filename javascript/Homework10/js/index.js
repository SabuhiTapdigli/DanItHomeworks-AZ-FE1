let first = document.getElementById('first');
let eye = document.getElementById('eye');
let openEye = document.getElementById('open-eye');
let second = document.getElementById('second');
let btn = document.getElementById('btn');
let span= document.getElementById('span');
eye.addEventListener('click',togglePass);
function togglePass() {
    eye.classList.toggle('active');
    if (first.type =='password') {
        first.type ='text'
        eye.className='fas fa-eye-slash'
    }
     else {
        first.type = 'password';
        eye.className= 'fas fa-eye'
    }
}

openEye.addEventListener('click',toggleClose);
function toggleClose() {
    openEye.classList.toggle('active');
    if (second.type =='text') {
        second.type ='password'
        openEye.className='fas fa-eye'
    }
    else {
        second.type = 'text';
        openEye.className= 'fas fa-eye-slash'
    }
}
function myFunction() {

    if (first.value === second.value) {
        alert('You are welcome');
    }
    else{
        span.innerHTML='You need to enter the identical values';
        document.getElementById('span').style.border='1px solid red'
    }

}

