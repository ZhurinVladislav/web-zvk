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
})