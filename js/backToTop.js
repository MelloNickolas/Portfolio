  // Seleciona o botão
  const backToTopButton = document.getElementById('backToTop');

  // Mostrar o botão quando o usuário rolar para baixo
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      backToTopButton.classList.add('show');
    } else {
      backToTopButton.classList.remove('show');
    }
  });

  // Adicionar funcionalidade ao botão
  backToTopButton.addEventListener('click', () => {
    window.scrollTo({
      top: 0, // Rola para o topo
      behavior: 'smooth' // Animação suave
    });
  });