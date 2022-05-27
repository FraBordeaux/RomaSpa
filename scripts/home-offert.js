const mothersDay = [];

class MotherDay {
    title;
    paragraphe;
    offert1;
    offert2;
    offert3;
    offert4;

    constructor(title, paragraphe, offert1, offert2, offert3, offert4) {
    
    this.title = title;
    this.paragraphe = paragraphe;
    this.offert1 = offert1;
    this.offert2 = offert2;
    this.offert3 = offert3;
    this.offert4 = offert4;
    mothersDay.push(this);
    }

}

const offert1 = new MotherDay ("Spécial fête des meres", "Inculs :", "Soin visage", "Soin corps", "Smothie detox", "Kit crème visage")

for (let i = 0; i < mothersDay.length; i++) {

const offertMotherDay = document.querySelector("#container-offert");
offertMotherDay.innerHTML += 

`
<div id="title-offert" class="title-offert">
                
                <h3> ${mothersDay[i].title} </h3>

                <p> ${mothersDay[i].paragraphe} </p>
                
                <ul>
                    <li> ${mothersDay[i].offert1} </li>
                    <li> ${mothersDay[i].offert2} </li>
                    <li> ${mothersDay[i].offert3} </li>
                    <li> ${mothersDay[i].offert4} </li>
                    
                </ul>

            </div>
`

}
