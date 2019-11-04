let number = prompt("Please enter number");
let check=true;
while (check){
    if (number==="") {
        alert ("Sorry No numbers");
    }
    if (Number.isInteger(Number(number))){
        let i=0;
        while (i <=number) {
            if (i%5==0) {
                console.log(i);
            }
            i++;
        }
        check=false;


    }
    else {
        number=prompt("enter a valid number until");
    }
}


