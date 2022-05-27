const header = document.querySelector("header");

header.innerHTML =
`
    <!-- insert logo -->
    <img src="/assets/images/logos/logowhite.png" alt="logo Roma SPA" id = "logo_romaheader">

    <!-- what does this do ? -->
    <div id="top_head_border"></div>

`;

/* video en boucle. je n'ai pas reçu le fichier du video.
    <video id="background_video" autoplay loop muted>
        <source src="/assets/videos/background_video_header.mp4" type="video/mp4">  
    </video>
*/

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

/*
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


*/





