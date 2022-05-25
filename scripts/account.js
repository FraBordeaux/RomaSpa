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

const selectedProducts = document.querySelector(".selected-products"); // account block, product section

const loggedOut = document.querySelector(".logged-out"); // login block active
const loggedIn = document.querySelector(".logged-in"); // account block active

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
        let userInfoObject = JSON.parse(retrieveUserInfo);
        
        if((userInfoObject.userCart.length) === 0){
            buttonPlaceHolder();
        } else {
            selectedProductList(userInfoObject.userCart);
        }
    }// end updateCart function
         
} // end class

// create user
let userFra = new User("Francesca", "Nadel", {"domicile":"Bordeaux"}, "fra@gmail.com", "0622000452", "0622000452", "30/05/1977")

// user logged in 
userLogIn.addEventListener("click", logIn =>{
    userFra.loggedIn = true;    // user is logged in
    loggedOut.style.display = "none"; // remove login block
    loggedIn.style.display = "block"; // display account block
    document.querySelector("h2").innerText = `Bienvenue ${userFra.userFirstName}!`; // welcome message
    localStorage.setItem('user', JSON.stringify(userFra)); // create user in localStorage
})

// user logged out
userLogOut.addEventListener("click", logOut =>{
    userFra.loggedIn = false;
    loggedOut.style.display = "block";
    loggedIn.style.display = "none";
    
})

// update user cart when page refreshed
userFra.updateCart();

function buttonPlaceHolder(){
    console.log("button place holder function");
    selectedProducts.innerHTML =
    `
    <div class="empty-cart">
        <button id="descover-products"><a href="/pages/products.html">Découvrir nos produits</a></button>
    </div>
    `;
}
        
function selectedProductList(cart){
    console.log("selected product list");
    selectedProducts.innerHTML =
    `
    <div class="full-cart">
        <h3>Voici les produits dans votre panier:</h3>
    `;

    /*
    cart.forEach(item =>{
        selectedProducts.innerHTML +=
        `
        <div class="items-in-cart">
            <p>${item.name}</p>
            <p>${item.value}€</p>
        </div>
        `;
    })*/
        
    
    selectedProducts.innerHTML +=
        `
        <div class="cart-total">
            <p>Nombre de produits dans le panier : ${cart.length/2} </p>
            <p>Prix total : ${cart[1]} </p>
        </div>
        <button id="pay">Régler</button>
        `;
}
