// Seleciona os elementos
const descricaoDiv = document.getElementById('descricao');
const audio = document.getElementById('myAudio');
const comprarSection = document.getElementById('comprarSection');

// Flag para controlar se os eventos devem funcionar
let audioAtivo = false;

// Ao clicar na descrição, ativa os eventos
descricaoDiv.addEventListener('click', () => {
    audioAtivo = true;
});

// Evento mouseover na descrição
descricaoDiv.addEventListener('mouseover', () => {
    if (audioAtivo) {
        audio.play();
    }
});

// Evento mouseleave na descrição (desativa a flag aqui)
descricaoDiv.addEventListener('mouseleave', () => {
    if (audioAtivo) {
        audio.pause();
        audio.currentTime = 0;
        audioAtivo = false; // agora desativa só ao sair da descrição
    }
});

// Eventos em comprarSection, só funcionam se a flag ainda estiver ativada
comprarSection.addEventListener('mouseover', () => {
    if (audioAtivo) {
        audio.play();
    }
});

comprarSection.addEventListener('mouseleave', () => {
    if (audioAtivo) {
        audio.pause();
        audio.currentTime = 0;
    }
});
