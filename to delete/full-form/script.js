const usernameEl = document.querySelector('#username');
const emailEl = document.querySelector('#email');
const passwordEl = document.querySelector('#password');
const confirmPasswordEl = document.querySelector('#confirm-password');

const form = document.querySelector('#signup');


const checkUsername = function() {

    let valid = false;

    const min = 3;
    const max = 25;

    const username = usernameEl.value.trim();

    if (!isRequired(username)) {
        showError(usernameEl, "Le nom d'utilisateur ne peut pas être vide");
    } else if (!isBetween(username.length, min, max)) {
        showError(usernameEl, `Le nom d'utilisateur doit être compris entre ${min} et ${max} caractères.`)
    } else {
        showSuccess(usernameEl);
        valid = true;
    }
    return valid;
};


const checkEmail = function() {

    let valid = false;

    const email = emailEl.value.trim();

    if (!isRequired(email)) {
        showError(emailEl, "L'email ne peut pas être vide");
    } else if (!isEmailValid(email)) {
        showError(emailEl, "L'email est invalide")
    } else {
        showSuccess(emailEl);
        valid = true;
    }
    return valid;
};

const checkPassword = function() {

    let valid = false;

    const password = passwordEl.value.trim();

    if (!isRequired(password)) {
        showError(passwordEl, 'Le mot de passe ne peut pas être vide');
    } else if (!isPasswordSecure(password)) {
        showError(passwordEl, 'Le mot de passe doit avoir au minimum 8 caractères, avec au moins : 1 majuscule, 1 miniscule, 1 nombre et 1 caractère spécial compris dans (!@#$%^&*)');
    } else {
        showSuccess(passwordEl);
        valid = true;
    }

    return valid;
};

const checkConfirmPassword = function() {

    let valid = false;

    const confirmPassword = confirmPasswordEl.value.trim();
    const password = passwordEl.value.trim();

    if (!isRequired(confirmPassword)) {
        showError(confirmPasswordEl, "Merci d'écrire le mot de passe à nouveau");
    } else if (password !== confirmPassword) {
        showError(confirmPasswordEl, "Les mots de passe ne correspondent pas");
    } else {
        showSuccess(confirmPasswordEl);
        valid = true;
    }

    return valid;
};

const isEmailValid = function(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};

const isPasswordSecure = function(password) {
    const re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    return re.test(password);
};

const isRequired = value => value === '' ? false : true;
const isBetween = (length, min, max) => length < min || length > max ? false : true;


const showError = function(input, message) {
  
    const formField = input.parentElement;
   
    formField.classList.remove('success');
    formField.classList.add('error');

    const error = formField.querySelector('small');
    error.textContent = message;
};

const showSuccess = function(input) {
    const formField = input.parentElement;

    formField.classList.remove('error');
    formField.classList.add('success');

    const error = formField.querySelector('small');
    error.textContent = '';
}


form.addEventListener('submit', function (e) {
    
    e.preventDefault();

    // validate fields
    let isUsernameValid = checkUsername();
    let isEmailValid = checkEmail();
    let isPasswordValid = checkPassword();
    let isConfirmPasswordValid = checkConfirmPassword();

    let isFormValid = isUsernameValid &&
        isEmailValid &&
        isPasswordValid &&
        isConfirmPasswordValid;

   // Envoyer au serveur si le formulaire est valide
    if (isFormValid) {

    }
});


const debounce = (fn, delay = 500) => {
    let timeoutId;
    return (...args) => {
        // cancel the previous timer
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        // setup a new timer
        timeoutId = setTimeout(() => {
            fn.apply(null, args)
        }, delay);
    };
};

form.addEventListener('input', debounce(function (e) {
    switch (e.target.id) {
        case 'username':
            checkUsername();
            break;
        case 'email':
            checkEmail();
            break;
        case 'password':
            checkPassword();
            break;
        case 'confirm-password':
            checkConfirmPassword();
            break;
    }
}));