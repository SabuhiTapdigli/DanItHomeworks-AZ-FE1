
function createNewUser(firstname,lastname) {
    return {
        firstname,
        lastname,
        getlogin() {
            return this.firstname.charAt(0).toLowerCase() + this.lastname.toLowerCase();

        }
    };
}

let firstname=prompt("enter your firstname" );
let lastname=prompt("enter your lastname");
let newuser=createNewUser(firstname,lastname)
console.log(newuser.getlogin());