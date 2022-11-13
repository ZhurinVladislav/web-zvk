document.addEventListener("DOMContentLoaded", function() {
  const btnClick = document.querySelector('#btn-text');
  const btnText = document.querySelector('.text');

  btnClick.addEventListener("click", addText());

  function addText() {
    btnText.classList.toggle("active");
    console.log("Нажал на кнопку")
  }
})