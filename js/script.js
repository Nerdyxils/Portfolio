const buttons = document.querySelectorAll('button');
const mobileNav = document.getElementById('mymobilenav');
const mobileIcon = document.getElementById('mobile_icon');
const body = document.getElementById('nav');

buttons.forEach(function(button){
    button.addEventListener('click', function(){
        if (button.classList.contains('insure')) {
            window.location = 'https://insure-landing-page-o74e276ud.vercel.app/';
        } else if (button.classList.contains('fylo')) {
            window.location = "https://fylo-landing-page-jly72g3ad.vercel.app/";
        } else if (button.classList.contains('trackProject')) {
            window.location = "https://project-tracking-h1fr2r2g8.vercel.app/";
        } else if (button.classList.contains('signUp')) {
            window.location = "https://intro-signup-page-i0bmtf18h.vercel.app/";
        };
    })
});



body.addEventListener('click', showNav);
function showNav() {
    if (mobileNav.style.display === 'none') {

        mobileNav.style.display = 'block';
        mobileIcon.src = mobileIcon.src.replace('images/icon-hamburger.svg', 'images/icon-close.svg');
    } else {
        mobileNav.style.display = 'none';
        mobileIcon.src = mobileIcon.src.replace('images/icon-close.svg', 'images/icon-hamburger.svg');
    }
}