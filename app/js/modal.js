document.addEventListener('DOMContentLoaded', function() {
  const modal = document.getElementById('myModal');
  const btn = document.getElementById("btn");
  const span = document.getElementsByClassName("close")[0];
  const body = document.body;

  btn.onclick = function() {
    modal.style.display = "block";
    body.classList.toggle("noscroll");
    console.log('Нажал на кнопку')
  }


  span.onclick = function() {
    modal.style.display = "none";
    body.classList.remove("noscroll");
  }

  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
      body.classList.remove("noscroll");
    }
  }
})