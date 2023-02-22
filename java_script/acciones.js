//Carrusel
document.addEventListener('DOMContentLoaded', () => {
  //Inicializar carrusel
  const carousel = document.querySelectorAll('.carousel');
  M.Carousel.init(carousel, {
    fullWidth: true,
    indicators: true,
    duration: 500, 
    padding: 20
  });
  
  //Funcio de autoplay
  let indicatorItems = document.querySelectorAll('.carousel .indicator-item'),
      slideTime = 4000,
      activeClass = "active";

  setInterval(() => {
    indicatorItems.forEach(el => {
      if (el.classList.contains(activeClass)) {
        sib = el.nextElementSibling;
        if (sib == null) {
          indicatorItems[0].click();
        } else {
          sib.click()
        }
      }
    });
  }, slideTime);
});

//Inicializacion menu responsive
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems);
});

//Inicializacion de despliegue
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.collapsible');
  var instances = M.Collapsible.init(elems);
});




    