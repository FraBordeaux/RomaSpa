
let allProducts = [];


class Product {
    productName;
    productDescription;
    productPrice;
    productVolume;

    constructor(productName, productDescription, productPrice, productVolume){
        this.productName = productName;
        this.productDescription = productDescription;
        this.productPrice = productPrice;
        this.productVolume = productVolume;
        allProducts.push(this);
    }
}

let kitVoyage = new Product("Collection Rituels de Beauté", ` Partez à la découverte des recettes de beauté ancestrales avec cette collection de 5 incontournables visage et corps. Des formats voyage rassemblés dans une charmante trousse qui ne quittera plus votre sac !`, 39, 15-30);


const productList = document.querySelector(".product-list");


for(let i = 0 ; i < allProducts.length ; i ++){

        productList.innerHTML +=
        `
            <div>
                    <img src="/assets/images/products/kit-voyage.jpg" /> 
                    <h4>${allProducts[i].productName}</h4>
                    <p>${allProducts[i].productDescription}</p>
                    <p>${allProducts[i].productPrice} min</p>
                    <p>${allProducts[i].productVolume} €</p>
                    <button>Acheter</button>
                
            </div>
        
        `;
}

