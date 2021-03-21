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



(function(){
  $("a li").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    }
  });
});


const AnimateOnScroll = function ({ offset } = { offset: 10 }) {
    // Define a dobra superior, inferior e laterais da tela
    const windowTop = (offset * window.innerHeight) / 100;
    const windowBottom = window.innerHeight - windowTop;
    const windowLeft = 0;
    const windowRight = window.innerWidth;
  
    this.start = (element) => {
      window.requestAnimationFrame(() => {
        // Seta os atributos customizados
        element.style.animationDelay = element.dataset.animationDelay;
        element.style.animationDuration = element.dataset.animationDuration;
  
        // Inicia a animacao setando a classe para animar
        element.classList.add(element.dataset.animation);
  
        // Seta o elemento como animado
        element.dataset.animated = "true";
      });
    };
  
    this.inViewport = (element) => {
      // Obtem o boundingbox do elemento
      const elementRect = element.getBoundingClientRect();
      const elementTop =
        elementRect.top + parseInt(element.dataset.animationOffset) ||
        elementRect.top;
      const elementBottom =
        elementRect.bottom - parseInt(element.dataset.animationOffset) ||
        elementRect.bottom;
      const elementLeft = elementRect.left;
      const elementRight = elementRect.right;
  
      // Verifica se o elemento esta na tela
      return (
        elementTop <= windowBottom &&
        elementBottom >= windowTop &&
        elementLeft <= windowRight &&
        elementRight >= windowLeft
      );
    };
  
    // Percorre o array de elementos, verifica se o elemento está na tela e inicia animação
    this.verifyElementsInViewport = (els = elements) => {
      for (let i = 0, len = els.length; i < len; i++) {
        // Passa para o proximo laço se o elemento ja estiver animado
        if (els[i].dataset.animated) continue;
  
        this.inViewport(els[i]) && this.start(els[i]);
      }
    };
  
    // Obtem todos os elementos a serem animados
    this.getElements = () =>
      document.querySelectorAll("[data-animation]:not([data-animated])");
  
    // Atualiza a lista de elementos a serem animados
    this.update = () => {
      elements = this.getElements();
      elements && this.verifyElementsInViewport(elements);
    };
  
    // Inicia os eventos
    window.addEventListener("load", this.update, false);
    window.addEventListener(
      "scroll",
      () => this.verifyElementsInViewport(elements),
      { passive: true }
    );
    window.addEventListener(
      "resize",
      () => this.verifyElementsInViewport(elements),
      { passive: true }
    );
  };
  
  // Initialize
  const options = {
    offset: 15 // percentage of the window
  };
  
  const animation = new AnimateOnScroll(options);

  