// Seleciona os elementos
const openModalBtn = document.getElementById('openModalBtn');
const closeModalBtn = document.getElementById('closeModalBtn');
const modalOverlay = document.getElementById('modalOverlay');

// Verifica se os elementos existem antes de adicionar eventos
if (openModalBtn && closeModalBtn && modalOverlay) {

    // Abrir o modal
    openModalBtn.addEventListener('click', () => {
        modalOverlay.classList.add('show');
    });

    // Fechar o modal
    closeModalBtn.addEventListener('click', () => {
        modalOverlay.classList.remove('show');
    });

    // Fechar o modal ao clicar fora dele
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            modalOverlay.classList.remove('show');
        }
    });
} else {
}
