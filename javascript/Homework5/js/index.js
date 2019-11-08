
function createNewUser(firstname,lastname, dateofbirth) {
    return {
        firstname,
        lastname,
        dateofbirth: array = dateofbirth.split("."),

        getAge(){
            return new Date ().getFullYear()-array [2];
        },
        getpassword (){
            return this.firstname.charAt(0).toUpperCase() + this.lastname.toLocaleLowerCase()+ array [2];
        },
        getlogin() {
            return this.firstname.charAt(0).toLowerCase() + this.lastname.toLowerCase();

        }
    };
}

let firstname=prompt("enter your firstname" );
let lastname=prompt("enter your lastname");
let dateofbirth=prompt("enter your date of birth example: dd.mm.yyyy");


let newuser=createNewUser(firstname,lastname, dateofbirth);
console.log(newuser.getlogin()+" " + newuser.getAge()+  " " + newuser.getpassword());