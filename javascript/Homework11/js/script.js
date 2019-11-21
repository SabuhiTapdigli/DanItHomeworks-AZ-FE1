let btn = document.getElementsByClassName("btn");
btn.addEventListener("keypress", myFunction);
function myFunction(event) {
    let x = event.which;
    if (x === 13) {
       alert ('hello')
    }
}