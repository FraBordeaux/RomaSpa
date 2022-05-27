const userLogIn = document.querySelector('#login'); // login page, login button
const userSignUp = document.querySelector('#sign-up'); // loginpage, sign up button


// class user
class User {
    userFirstName;
    userLastName;
    userEmail;
    userTel;
    userMobile;
    userDateOfBirth;
    userAddresses=[];
    userCart=[];
    userCartTotal=0;
    userTreatment=[];
    userFollowOrder=[];
    userHistory=[];
    loggedIn = false;

    constructor(firstName, lastName, addresses, email, tel, mobile, dob){
        this.userFirstName = firstName;
        this.userLastName = lastName;
        this.userAddresses = addresses;
        this.userEmail = email;
        this.userTel = tel;
        this.userMobile = mobile;
        this.userDateOfBirth = dob;
    }

} // end of class

// create user
let userFra = new User("Francesca", "Nadel", {"domicile":"Bordeaux"}, "fra@gmail.com", "0622000452", "0622000452", "30/05/1977")
localStorage.setItem('user', JSON.stringify(userFra)); // create user in localStorage

// retrieve user email input
let userEmail="";
function registerEmail(email){
    userEmail=email;
}

// retrieve user password input
let userPassword="";
function registerPassword(password){
    userPassword=password;
}

// check email and password, if True, go to account
// if false....
userLogIn.addEventListener("click", controlLogin =>{
    if(userEmail === "francesca.nadel@gmail.com" && userPassword === "secret"){
        let retrieveUserInfo = localStorage.getItem('user'); // format string
        let user = JSON.parse(retrieveUserInfo);// format objet
        user.loggedIn = true;
        localStorage.setItem('user', JSON.stringify(user));
        window.location.href = "/pages/account.html";
    } else {console.log("login error");
        document.querySelector('#login-error').style.display = "block";}
})