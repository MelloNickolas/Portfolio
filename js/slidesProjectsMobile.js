const container = document.querySelector('.projeto-cards');
const cards = document.querySelectorAll('.card');

let currentCard = 0;
let touchStartX = 0;
let touchEndX = 0;

function showCard(n) {
  cards[currentCard].classList.remove('active');
  cards[n].classList.add('active');
  container.style.transform = `translateX(-${n * 200}px)`;
  currentCard = n;
}

container.addEventListener('touchstart', (e) => {
  touchStartX = e.touches[0].clientX;
});

container.addEventListener('touchend', (e) => {
  touchEndX = e.changedTouches[0].clientX;
  const diffX = touchEndX - touchStartX;

  if (Math.abs(diffX) > 100) { // Define a sensibilidade do swipe
    if (diffX > 0) {
      // Swipe para a direita (card anterior)
      const newCard = currentCard === 0 ? cards.length - 1 : currentCard - 1;
      showCard(newCard);
    } else {
      // Swipe para a esquerda (próximo card)
      const newCard = currentCard === cards.length - 1 ? 0 : currentCard + 1;
      showCard(newCard);
    }
  }
});

// Inicializa o slideshow no primeiro card
showCard(currentCard);

// Verifica a largura da tela e ajusta o comportamento
window.addEventListener('resize', () => {
  if (window.innerWidth >= 1000) {
    // Remove a classe 'active' dos cards
    cards.forEach(card => card.classList.remove('active'));
  }
});