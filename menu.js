// MENU
const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event) {
  if (event.type === 'touchstart') event.preventDefault();
  const nav = document.getElementById('nav');
  nav.classList.toggle('active');
  const active = nav.classList.contains('active');
  event.currentTarget.setAttribute('aria-expanded', active);
  if (active) {
    event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
  } else {
    event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
  }
}
// SLIDER
const swiper = new Swiper(".swiper",{
  autoplay: {
        delay: 10000,
        disableOnInteraction: false,
        
      },
  loop: true,
  navigation:{
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
  },
  pagination:{
      el: ".swiper-pagination",
  },
  keyboard: true,
  dynamicBullets: true,
});
    
btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);
// SCROOL REVEVAL
ScrollReveal().reveal('.conteúdo',{delay:1000, reset: true});

  // Initialize and add the map
  function initMap() {
  // The location of Uluru
  const uluru = { lat: -18.8523619, lng: -41.9472816 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 70,
    center: uluru,
  });

  const contentString ='<p style="color: black; font-size: 13px; padding: 10px; border-bottom: 1px solid black;">Darach</p>';

const infowindow = new google.maps.InfoWindow({
  content: contentString,
});

const marker = new google.maps.Marker({
  position: uluru,
  map,
  title: "Uluru (Ayers Rock)",
});

marker.addListener("click", () => {
  infowindow.open({
    anchor: marker,
    map,
    shouldFocus: false,
  });
});
}


window.initMap = initMap;

