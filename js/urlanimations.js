document.addEventListener("DOMContentLoaded", function() {
  // Ativa o fade-in quando a página carregar
  document.body.classList.add('fade-in');
});

window.changePage = function(url) {
  document.body.classList.remove('fade-in'); 
  document.body.classList.add('fade-out');

  setTimeout(() => {
      window.location.href = url;
  }, 1000);
};