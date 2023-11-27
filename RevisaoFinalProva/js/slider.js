document.addEventListener("DOMContentLoaded", function() {
    const slider = document.querySelector('.slider');
    let currentIndex = 0;

    function changeSlide(direction) {
        currentIndex += direction;

        // Verificar limites do índice
        if (currentIndex < 0) {
            currentIndex = slider.children.length - 1;
        } else if (currentIndex >= slider.children.length) {
            currentIndex = 0;
        }

        // Atualizar a transformação do slider
        const translateValue = -currentIndex * 100 + '%';
        slider.style.transform = 'translateX(' + translateValue + ')';
    }

    // Adicionar manipuladores de eventos aos botões
    document.querySelector('.prev-btn').addEventListener('click', function() {
        changeSlide(-1);
    });

    document.querySelector('.next-btn').addEventListener('click', function() {
        changeSlide(1);
    });
});