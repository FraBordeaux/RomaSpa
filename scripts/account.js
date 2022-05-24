const allTabButtons = document.querySelectorAll('.tabs button');
const payButton = document.querySelector('#pay');
const reserveTreatment = document.querySelector('#reserve-treatment');
const reserveInactive = document.querySelector('#reserve-inactive');
const reserveActive = document.querySelector('#reserve-active');

reserveTreatment.addEventListener('click', () =>{
    console.log(`is working`)
    if(reserveInactive.style.display=="block"){
        reserveActive.style.display = "block";
        reserveInactive.style.display = "none";
    }
})

class User {
    userFirstName;
    userLastName;
    userMailAddress;
    userBillAddress;
    userEmail;
    userTel;
    userMobile;
    userDateOfBirth;

    constructor(firstName, lastName, mailAddress, billAddress, email, tel, mobile, dob){
        this.userFirstName = firstName;
        this.userLastName = lastName;
        this.userMailAddress = mailAddress;
        this.userBillAddress = billAddress;
        this.userEmail = email;
        this.userTel = tel;
        this.userMobile = mobile;
        this.userDateOfBirth = dob;
    }
}

let user1 = new User("Francesca", "Nadel", "rue de la Vieille Ferme, 33450 Saint-Loubè", "même", "francesca.nadel@gmail.com", 0987766554, 0622000452, 30/05/1977)