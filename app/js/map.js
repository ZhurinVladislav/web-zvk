document.addEventListener("DOMContentLoaded", function() {
  const btnClick = document.querySelector('#btn-text');
  const btnText = document.querySelector('#text-addition');
  const btnClose = document.querySelector('#text-close');

  btnClick.addEventListener("click", function() {
    btnText.classList.add("active");
    btnClick.classList.add("disabled");
  });

  btnClose.addEventListener("click", function() {
    btnText.classList.remove("active");
    btnClick.classList.remove("disabled");
  })
})