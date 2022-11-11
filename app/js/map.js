document.addEventListener('DOMContentLoaded', function() {
  const modal = document.getElementById('myMap');
  const btn = document.getElementById("btnMap");
  const span = document.getElementsByClassName("close-map")[0];
  const body = document.body;

  btn.onclick = function() {
    modal.style.display = "block";
    body.classList.toggle("noscroll-map");
  }


  span.onclick = function() {
    modal.style.display = "none";
    body.classList.remove("noscroll-map");
  }

  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
      body.classList.remove("noscroll-map");
    }
  }

  ymaps.ready(init);
  function init() {
  const mapElem = document.querySelector('#map');
  const myMap = new ymaps.Map(
    "map",
    { 
    center: [55.75846806898367, 37.60108849999989], 
    zoom: 14, 
    controls: ['geolocationControl', 'zoomControl']
    },
    { 
    suppressMapOpenBlock: true,
    geolocationControlSize: "large",
    geolocationControlPosition:  { top: "400px", right: "20px" },
    geolocationControlFloat: 'none',
    zoomControlSize: "small",
    zoomControlFloat: "none",
    zoomControlPosition: { top: "320px", right: "20px" }
    }
  );

  myMap.behaviors.disable('scrollZoom');

  const myPlacemark = new ymaps.Placemark(
    [55.75846806898367, 37.60108849999989],
    {},
    {
    iconLayout: 'default#image',
    iconImageHref: 'img/subtract.svg',
    iconImageSize: [20, 20],
    iconImageOffset: [-3, 42]
    }
  );

  myMap.geoObjects.add(myPlacemark);
  myMap.container.fitToViewport();
  }
});

