const allTabButtons = document.querySelectorAll('.tabs button');
const payButton = document.querySelector('#pay');
const reserveTreatment = document.querySelector('#reserve-treatment'); //reserve button
const reserveInactive = document.querySelector('#reserve-inactive'); // inactive reserve form
const reserveActive = document.querySelector('#reserve-active'); // active reserve form

console.log(reserveInactive.style.cssText);


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

    constructor(firstName, lastName, addresses, email, tel, mobile, dob){
        this.userFirstName = firstName;
        this.userLastName = lastName;
        this.userAddresses = addresses;
        this.userEmail = email;
        this.userTel = tel;
        this.userMobile = mobile;
        this.userDateOfBirth = dob;
    }
}

let user1 = new User("Francesca", "Nadel", {"domicile": "21 rue de la Vieille Ferme, 33450 Saint-Loubè", "société":"30 cours du Rouge, 33000 Bordeaux"}, "même", "francesca.nadel@gmail.com", 0987766554, 0622000452, 30/05/1977)