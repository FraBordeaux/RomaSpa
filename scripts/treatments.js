
let allPrices = [];


class Treatment {
    treatmentName;
    description;
    timing;
    price;
    VIP;

    constructor(treatmentName, description, timing, price, VIP){
        this.treatmentName = treatmentName;
        this.description = description;
        this.timing = timing;
        this.price = price;
        this.VIP = VIP;
        allPrices.push(this);
    }
}

let facialVIPKoBiDo = new Treatment("Soin du visage Ko Bi Do Rédensification", `Véritable soin "anti-âge global", ce lifting manuel inspiré du massage japonais Ko Bi Do, agit en profondeur sur les rides, la fermeté, les taches pigmentaires et l'éclat, tout en insistant sur le contour des yeux, la bouche, le décolleté et les bras. Vous retrouvez une peau repulpée, lissée, un teint éclatant et un esprit parfaitement détendu.`, 50, 124, true)
let facialKoBiDo = new Treatment("Soin du visage Ko Bi Do Jeunesse", `Ce soin combine les gestuelles de lifting naturel à un soin adapté aux zones les plus fragiles du visage, pour des résultats immédiats.`, 20, 62, false)
let treat = new Treatment("name", `descrip`, 50, 124, true)

const pricingList = document.querySelector(".pricing-list");
const vipPricingList = document.querySelector(".vip-pricing-list");


for(let i = 0 ; i < allPrices.length ; i ++){

    if (allPrices[i].VIP){


        vipPricingList.innerHTML +=
        `

                <div class="left-side">
                    <h4>${allPrices[i].treatmentName}</h4>
                    <p>${allPrices[i].description}</p>
                </div>

                <div class="right-side">
                    <p>${allPrices[i].timing} min</p>
                    <p>${allPrices[i].price} €</p>
                    <button>Réserver</button>
                </div>

            </div>
        
        `;

    } else {
        pricingList.innerHTML += 
        `
            
                <div class="left-side">
                    <h4>${allPrices[i].treatmentName}</h4>
                    <p>${allPrices[i].description}</p>
                </div>

                <div class="right-side">
                    <p>${allPrices[i].timing} min</p>
                    <p>${allPrices[i].price} €</p>
                    <button>Réserver</button>
                </div>
            
            </div>
            
        `;
    }
}

