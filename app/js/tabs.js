document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.btn-list').forEach(function(tabsBtn) {
    tabsBtn.addEventListener('click', function(event) {
      const path = event.currentTarget.dataset.path;

      document.querySelectorAll('.btn-list').forEach(function(btn) {
        btn.classList.remove('btn-active')
      });

      event.currentTarget.classList.add('btn-active');

      document.querySelectorAll('.projects').forEach(function(tabsBtn) {
        tabsBtn.classList.remove('active-tab')
      });

      document.querySelector(`[data-target="${path}"]`).classList.add('active-tab');
    })
  })
})