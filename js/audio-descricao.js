// Seleciona o elemento com o id "descricao" e armazena em uma variável
const descricaoDiv = document.getElementById('descricao');

// Seleciona o elemento com o id "myAudio" e armazena em uma variável
const audio = document.getElementById('myAudio');

// Adiciona um evento de mouseover ao elemento "descricaoDiv"
descricaoDiv.addEventListener('mouseover', () => {
    // Inicia a reprodução do áudio quando o mouse entra no elemento
    audio.play();
});

// Adiciona um evento de mouseleave ao elemento "descricaoDiv"
descricaoDiv.addEventListener('mouseleave', () => {
    // Pausa a reprodução do áudio quando o mouse sai do elemento
    audio.pause();
    // Reseta o tempo de reprodução do áudio para o início
    audio.currentTime = 0;
});

// Adiciona um evento de mouseover ao elemento "comprarSection"
comprarSection.addEventListener('mouseover', () => {
    // Inicia a reprodução do áudio quando o mouse entra no elemento
    audio.play();
});

// Adiciona um evento de mouseleave ao elemento "comprarSection"
comprarSection.addEventListener('mouseleave', () => {
    // Pausa a reprodução do áudio quando o mouse sai do elemento
    audio.pause();
    // Reseta o tempo de reprodução do áudio para o início
    audio.currentTime = 0;
});