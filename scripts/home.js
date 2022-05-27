const cardsList = [];

class CardService {
    pictures;
    title;

    constructor(pictures,title) {
        this.pictures = pictures;
        this.title = title;
        cardsList.push(this);
    }

}

const card1 = new CardService("../assets/images/treatments/facial-massage-2.jpeg", "SOINS");
const card2 = new CardService("../assets/images/treatments/facial-massage.png", "VIP");
const card3 = new CardService("../assets/images/products/bath-oil.png", "PRODUCTS");

for (let i = 0; i < cardsList.length; i++) {   

const sectionCards = document.querySelector('#container-cards');
sectionCards.innerHTML +=

`
<div id="container" class="container">
                
<div id="images-card" class="images-card">
    <img class="" src=" ${cardsList[i].pictures} " alt=" ${cardsList[i].title} ">
    <h3>${cardsList[i].title}</h3>
</div>
</div>
`
}