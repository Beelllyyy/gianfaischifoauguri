document.addEventListener('DOMContentLoaded', () => {
    const revealButton = document.getElementById('reveal-button');
    const mainTitle = document.getElementById('main-title');
    const subtitle = document.getElementById('subtitle');
    const insultSection = document.getElementById('insult-section');
    const wishSection = document.getElementById('wish-section');

    let stage = 0;

    revealButton.addEventListener('click', () => {
        stage++;

        switch (stage) {
            case 1:
                // Fase 1: Sostituire il titolo e rivelare il sottotitolo
                mainTitle.textContent = "ATTENZIONE: Messaggio Ufficiale dalla Repubblica di Borgo Putano";
                mainTitle.style.color = '#ff6b6b'; // Cambia colore per drammaticità
                
                subtitle.classList.remove('hidden');
                subtitle.classList.add('visible', 'fade-in');
                
                revealButton.textContent = "Clicca se sei frogio";
                break;

            case 2:
                // Fase 2: Rivelare l'insulto
                subtitle.classList.remove('visible');
                subtitle.classList.add('hidden'); // Nasconde il sottotitolo

                insultSection.classList.remove('hidden');
                insultSection.classList.add('visible', 'fade-in');
                
                revealButton.textContent = "< frogio detecred >";
                break;

            case 3:
                // Fase 3: Rivelare gli auguri
                insultSection.classList.remove('visible');
                insultSection.classList.add('hidden'); // Nasconde l'insulto

                wishSection.classList.remove('hidden');
                wishSection.classList.add('visible', 'fade-in');

                mainTitle.textContent = "Buon Compleanno, Giannina! (MA COL CAZZO)";
                mainTitle.style.color = '#66fcf1'; // Torna al colore originale

                revealButton.textContent = "Finito. Mi sono anche rotto rcazzo";
                revealButton.disabled = true; // Disabilita il pulsante
                revealButton.style.opacity = '0.5'; // Rende il pulsante grigio
                
                // Opzionale: Aggiungi un effetto confetti!
                triggerConfetti();
                break;
        }
    });

    // Funzione fittizia per un effetto confetti (richiederebbe una libreria esterna o codice CSS/canvas complesso per la realtà)
    // Qui simula solo un messaggio per completezza.
    function triggerConfetti() {
        console.log("Confetti Sparati! 🎊");
        // Se volessi confetti veri, potresti usare una libreria come 'canvas-confetti'
    }
});
