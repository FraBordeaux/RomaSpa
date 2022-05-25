
let allProducts = [];


class Product {
    productCategory;
    productImage;
    productName;
    productDescription;
    productPrice;
    productVolume;

    constructor(productCategory, image, productName, productDescription, productPrice, productVolume){
        this.productCategory = productCategory;
        this.productImage = image;
        this.productName = productName;
        this.productDescription = productDescription;
        this.productPrice = productPrice;
        this.productVolume = productVolume;
        allProducts.push(this);
    }

    placeInCart(){

    }
}

let kitVoyage = new Product("Kit", "/assets/images/products/kit-voyage.jpg", "Collection Rituels de Beauté", ` Partez à la découverte des recettes de beauté ancestrales avec cette collection de 5 incontournables visage et corps. Des formats voyage rassemblés dans une charmante trousse qui ne quittera plus votre sac !`, 39, "15-30");
let kitVoyage2 = new Product("Kit", "/assets/images/products/kit-voyage.jpg", "Collection Rituels de Beauté", ` Partez à la découverte des recettes de beauté ancestrales avec cette collection de 5 incontournables visage et corps. Des formats voyage rassemblés dans une charmante trousse qui ne quittera plus votre sac !`, 39, "15-30");


const productList = document.querySelector(".product-list");

// push product(object) to html
for(let i = 0 ; i < allProducts.length ; i ++){

        productList.innerHTML +=
        `
            <div>
                    <img src="${allProducts[i].productImage}" /> 
                    <h4>${allProducts[i].productName}</h4>
                    <p>${allProducts[i].productDescription}</p>
                    <p>${allProducts[i].productPrice}€</p>
                    <p>${allProducts[i].productVolume}ml</p>
                    <button class="button-buy" id="button${[i]}" name="${allProducts[i].productName}" value="${allProducts[i].productPrice}">Acheter</button>
                
            </div>
        
        `;
}

// get user information
let retrievedUser = localStorage.getItem('user'); // local json string
let userLoggedIn = JSON.parse(retrievedUser); // changed to object

// retrieve all buy buttons
const allBuyButtons = document.querySelectorAll(".button-buy");

// if buy button clicked, add product to user cart.
allBuyButtons.forEach(item =>{
    item.addEventListener("click", addToCart =>{
        let myObj = {
            name: item.name,
            value: item.value
        };
        userLoggedIn.userCart.push(myObj);
        localStorage.setItem('user', JSON.stringify(userLoggedIn));
    })
})


