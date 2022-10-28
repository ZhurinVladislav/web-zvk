document.addEventListener('DOMContentLoaded', function() {
  const allButtons = document.getElementsByClassName("toggle-button");

  for (let i = 0; i < allButtons.length; i++) {
    allButtons[i].onclick = function (e) {
      const isButtonOn = e.currentTarget.classList.contains(
        "toggle-button_active"
      );

      isButtonOn
        ? e.currentTarget.setAttribute("aria-label", "Off.")
        : e.currentTarget.setAttribute("aria-label", "On.");

      e.currentTarget.classList.toggle("toggle-button_active");
    };
  }
})