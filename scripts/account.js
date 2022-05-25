const userLogOut = document.querySelector('#logout'); // account page, logout button
const allTabButtons = document.querySelectorAll('.tabs button'); // account page, all tab buttons
const payButton = document.querySelector('#pay'); // account page, pay button
const reserveTreatment = document.querySelector('#reserve-treatment'); // account page, reserve button
const reserveInactive = document.querySelector('#reserve-inactive'); // inactive reserve form
const reserveActive = document.querySelector('#reserve-active'); // active reserve form
const selectedProducts = document.querySelector(".selected-products"); // account block, product section

let retrieveUserInfo = localStorage.getItem('user'); // format string
let user = JSON.parse(retrieveUserInfo);// format objet

// user logged in 
document.querySelector("h2").innerText = `Bienvenue ${user.userFirstName}!`; // welcome message

function updateCart(){
    if((user.userCart.length) === 0){
        buttonPlaceHolder();
    } else {
        selectedProductList(user.userCart);
    }
}// end updateCart function

// update user cart when page refreshed
updateCart();

// user logged out
userLogOut.addEventListener("click", logOut =>{
    user.loggedIn = false;
    localStorage.clear;
    window.location.href = "/pages/log-in.html";
})

// if cart empty, show link to product page
function buttonPlaceHolder(){
    selectedProducts.innerHTML =
    `
    <div class="empty-cart">
        <button id="descover-products"><a href="/pages/products.html">Découvrir nos produits</a></button>
    </div>
    `;
}

// if full, show list of products in cart
function selectedProductList(cart){
    selectedProducts.innerHTML =
    `
    <div class="full-cart">
        <h3>Voici les produits dans votre panier:</h3>
    `;

    cart.forEach(item =>{
        selectedProducts.innerHTML +=
        `
        <div class="items-in-cart">
            <p>${item.name}</p>
            <p>${item.value}€</p>
        </div>
        `;
    })
        
    selectedProducts.innerHTML +=
        `
        <div class="cart-total">
            <p>Nombre de produits dans le panier : ${cart.length} </p>
            <p>Prix total : 100€</p>
        </div>
        <button id="pay">Régler</button>
        `;
}
