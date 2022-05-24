// retrieve footer section
const footer = document.querySelector("footer");

// insert innerHTML into footer section
footer.innerHTML =
`

    <div class="top-section">

    <!--footer top left : contact info-->
    <div class="left-contact-info">
        <p> <strong> Roma Spa </strong> </p>
        <p>Bahnhofplatz 18</p>
        <p>3920 Zermatt - Switzerland</p>
        <p></p><a href="tel:+41279664500">+41 27 966 45 00</a></p>
        <p></p><a href="mailto:info@romaspa.ch">info@romaspa.ch</a></p>
    </div>

    <!--footer top right : links-->
    <div class="right-links">
        <a href="contact.html">Contact</a>
        <a href="press.html">Presse</a>
        <a href="careers.html">Carrières</a>
        <a href="team.html">Equipe</a>
    </div>
    </div>

    <!--footer : social networks -->
    <div class="social-networks">
        <img src="../assets/images/icons/facebook.png" alt="facebook icon" style="width: 38px;">
        <img src="../assets/images/icons/insta-linkedin.png" alt="instagram and linkedin icons">
        <img src="../assets/images/icons/twitter-pinterest.png" alt="twitter and pinterest icons">
    </div>

    <!--footer : small print bottom of page -->
    <div class="bottom-of-page">
        <p> <strong>©</strong> RomaSpa, Made by R.A.F.</p>
        <p><a href="pdc.html">Politique de confidentialité</a></p>
        <p><a href="cgv.html">Conditions générales</a></p>
    </div>

`;