const cardsList = [];

class CardServices {
    pictures;
    title;

    constructor(pictures,title) {
        this.pictures = pictures;
        this.title = title;
        cardsList.push(this);
    }

    displayProductsMouseOver() {}
}

const card1 = new CardServices("../assets/images/treatments/pexels-photo-5938644.jpeg", "Soins");
const card2 = new CardServices("../assets/images/treatments/facial-massage.png", "VIP");
const card3 = new CardServices("../assets/images/products/kit-voyage.jpg", "Produits");

for (let i = 0; i < cardsList.length; i++) {   

const sectionCards = document.querySelector('#container-cards');
sectionCards.innerHTML +=

`
<div id="container" class="container">
                
<div id="images-card">
    <img src=" ${cardsList[i].pictures} " alt=" ${cardsList[i].title} ">
</div>

<div class="title-card">
    <h3>${cardsList[i].title}</h3>
</div>

</div>
`
}