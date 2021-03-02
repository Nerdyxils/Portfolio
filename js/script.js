const buttons = document.querySelectorAll('button');
const mobileNav = document.getElementById('mymobilenav');
const mobileIcon = document.getElementById('mobile_icon');
const body = document.getElementById('nav');

buttons.forEach(function(button){
    button.addEventListener('click', function(){
        if (button.classList.contains('insure')) {
            window.location = 'https://insure-landing-page-o74e276ud.vercel.app/';
        } else if (button.classList.contains('jayo')) {
            window.location = "https://cto.jayo.one/";
        } else if (button.classList.contains('instar')) {
            window.location = "https://instar.io/";
        } else if (button.classList.contains('zonkio')) {
            window.location = "https://nerdyxils.github.io/project_LP/";
        };
    })
});

function twitter() {
    window.location.href = "https://twitter.com/Timi_dev"
};
function linkedIn() {
    window.location.href = "https://www.linkedin.com/in/abiodun-silas-timi/"
};
function gitHub() {
    window.location.href = "https://github.com/Nerdyxils/"
};


