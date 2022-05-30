
//menu html

document.querySelector('header').innerHTML = 
        `
        <div class="header_mobile" onclick="toggleMenu()">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
        </div>

        <nav class="nav-mobile">
            <div class="nav-mobile_close" onclick="toggleMenu()">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </div>
            
            <div class="menu_a">
                <ul class="nav-mobile_menu">
                    <li><a href="../pages/index.html">Accueil</a></li>
                    <li><a href="../pages/treatments.html">Soins</a></li>
                    <li><a href="../pages/products.html">Produits</a></li>
                    <li><a href="../pages/gallery.html">Galerie</a></li>
                    <li><a href="../pages/contact.html">Contact</a></li>
                </ul>
            </div>
        </nav> 
            
        <div class="mobile-overlay" onclick="toggleMenu()"></div>

        <!--logo-->

        <div id = "div_logo_romaheader">
            <img src="../assets/images/logos/logowhite.png" alt="logo Roma SPA" id="logo_romaheader">
            
            <!--ligne sous le logo-->
            <div id="div_border_line" ></div>
        </div>

        <!--icons-->
        <div class = "icon_header">
            <input type="image" src="../assets/images/icons/user_profil.png" id="user_profil">

        <!--shoppingList-->
            <input type="image" src="../assets/images/icons/buy_list.png" class="buy_list">
            <div class="triangleUpShoppingList"></div>
            <div class="divShoppingList"><p id="productsSelected"></p></div>    
        </div>

        
        <!--video background-->
        <img src="../assets/images/backgrounds/background-header.jpg" alt="salle de reception" id="background_image">

        <div class="title-header">
            <h1>Spa ROMA</h1>
            <h2>Spa de Luxe</h2>
        </div>
      
`;

//Menu Bg
function toggleMenu() {
    const navMobile = document.querySelector('.nav-mobile');
    const mobileOverlay = document.querySelector('.mobile-overlay');  

    if(navMobile.classList.contains('active')) {
        navMobile.classList.remove('active');
        mobileOverlay.classList.remove('active');
        document.querySelector("svg").style.color ="white";

    } else {
        navMobile.classList.add('active');
        mobileOverlay.classList.add('active');
        document.querySelector("svg").style.color = "transparent";
    } 
}

//Shoppingiconlist
const triangle = document.querySelector('.triangleUpShoppingList')
const divShoppingList = document.querySelector('.divShoppingList')
const iconShoppingList = document.querySelector('.buy_list')
const productsSelected = document.querySelector('#productsSelected')

iconShoppingList.addEventListener("mouseover",function(){
    triangle.style.cssText = ` width: 0;
    position:absolute;
    margin-top: 44px;
    margin-left:107px;
    height: 0;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    border-bottom: 35px solid white;`
    
    divShoppingList.style.cssText =`width :250px;
    margin-top: 71px;
    height: 200px;
    margin-left: -89px;
    background-color: white;
    border-radius: 10px;
    position: absolute;
    display: flex;
    align-items: center;`
},true);

iconShoppingList.addEventListener("mouseleave",function(){
    triangle.style.cssText = `none`
    divShoppingList.style.cssText =`none`
},true);

// retrieve user signed-up
let retrieveUserInfo = localStorage.getItem('user'); // format string
let user = JSON.parse(retrieveUserInfo);// format objet


// COMPTE COMPTE COMPTE
// if user logged in, icon leads to account page
// else it leads to login page


// PANIER PANIER PANIER
// if user logged in : personalized welcome message  
divShoppingList.innerText = 
`
Bienvenue ${user.userFirstName}!
`
;
    // if cart empty, display "panier vide"
    // else display items in cart.
    // use functions on account js page

// else se connecter button that leads to login page

