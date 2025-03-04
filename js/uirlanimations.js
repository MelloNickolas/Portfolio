window.addEventListener("load", () => {
  document.body.classList.add("fade-in");
});

// Captura todos os links para aplicar o efeito de saída ao clicar
document.querySelectorAll('a[href]').forEach(link => {
  if (link.hostname === window.location.hostname) {
      link.addEventListener("click", (event) => {
          const destino = link.getAttribute("href");

          // Se o link for uma âncora (começa com #), não faz o efeito de fade-out
          if (destino.startsWith("#")) {
              return; // Permite o comportamento normal de rolagem
          }

          event.preventDefault(); // Impede a navegação instantânea

          document.body.classList.remove("fade-in"); // Remove a classe fade-in para reiniciar a animação
          document.body.classList.add("fade-out"); // Aplica o efeito de saída

          setTimeout(() => {
              window.location.href = destino; // Redireciona após a animação
          }, 1000); // Tempo do fade-out (1s)
      });
  }
});
