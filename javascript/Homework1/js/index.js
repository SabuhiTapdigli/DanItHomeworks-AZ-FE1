let name = prompt("Please Enter Your Name");
let age = prompt("Please Enter Your Age");
if (age < 18) {
    alert("You are not allowed to visit this website");
}
else if (age >=18 && age <=22) {
    let r=confirm("Are you sure you want to continue?");
    let txt;
        if (r) {
            txt=("Welcome" +name +"!");
    }
        else {
            txt=("You are not allowed to visit this website");
        }
    document.getElementById("message").innerHTML = txt;
    }
else {
    alert("Welcome" +name +"!");
}

