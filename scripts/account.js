const userEmail = document.querySelector('#user-email'); // login page, user email input
const userPassword = document.querySelector('#user-password'); // login page, user password input
const userLogIn = document.querySelector('#login'); // login page, login button
const userLogOut = document.querySelector('#logout'); // account page, logout button
const userSignUp = document.querySelector('#sign-up'); // loginpage, sign up button

const allTabButtons = document.querySelectorAll('.tabs button'); // account page, all tab buttons
const payButton = document.querySelector('#pay'); // account page, pay button
const reserveTreatment = document.querySelector('#reserve-treatment'); // account page, reserve button
const reserveInactive = document.querySelector('#reserve-inactive'); // inactive reserve form
const reserveActive = document.querySelector('#reserve-active'); // active reserve form

class User {
    userFirstName;
    userLastName;
    userEmail;
    userTel;
    userMobile;
    userDateOfBirth;
    userAddresses=[];
    userCart=[];
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

    updateCart(){
        let retrieveUserInfo = localStorage.getItem('user');
        console.log("retrieved user info : " +retrieveUserInfo);
    }
}

let userFra = new User("Francesca", "Nadel", {"domicile":"Bordeaux"}, "fra@gmail.com", "0622000452", "0622000452", "30/05/1977")

const loggedOut = document.querySelector(".logged-out")
const loggedIn = document.querySelector(".logged-in")

userLogIn.addEventListener("click", logIn =>{
    userFra.loggedIn = true;    // user is logged in
    loggedOut.style.display = "none"; // remove login block
    loggedIn.style.display = "block"; // display account block
    document.querySelector("h2").innerText = `Bienvenue ${userFra.userFirstName}!`; // welcome message
    localStorage.setItem('user', JSON.stringify(userFra)); // create user in localStorage
})

userLogOut.addEventListener("click", logOut =>{
    userFra.loggedIn = false;
    loggedOut.style.display = "block";
    loggedIn.style.display = "none";
    
})

userFra.updateCart();
console.log((userFra.userCart));
