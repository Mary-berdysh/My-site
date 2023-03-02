
let loginButton = document.querySelector('.pain-top');

let loginPopup = document.querySelector ('.popup-sign-in');

loginButton.addEventListener('click', showPopup);

function showPopup(evt) {

    evt.preventDefault();
    loginPopup.classList.toggle('show-popup')
}

