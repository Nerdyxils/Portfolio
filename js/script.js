const buttons = document.querySelectorAll('button');

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