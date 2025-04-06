var images = document.querySelectorAll(".box");
images.forEach(function(image) {
    // Seleciona o elemento de áudio dentro da div imagem
    var audio = image.querySelector(".audio");

    // Adiciona evento de click para reproduzir o áudio quando o usuário clicar na imagem
    image.addEventListener("click", function() {
        // Verifica se o áudio está pronto para ser reproduzido
        if (audio.readyState >= 2) {
            // Reinicia o áudio se já estiver tocando
            audio.currentTime = 0;
            // Reproduz o áudio
            audio.play();
        } else {
            // Se o áudio ainda não estiver pronto, aguarde o evento "canplay" e, em seguida, reproduza
            audio.addEventListener("canplay", function() {
                audio.play();
            });
        }
    });

    // Adiciona evento de mouseout para parar o áudio quando o mouse sair do slide
    image.addEventListener("mouseout", function() {
        audio.pause();
        audio.currentTime = 0;
    });
});



// var images = document.querySelectorAll(".box");
// images.forEach(function(image) {
//     var audio = image.querySelector(".audio");
//     var clickCount = 0; // Variável para contar os cliques
//     var alternateAudio = "audio/Hoppy-Hopscotch2.mp3"; // Áudio alternativo

//     image.addEventListener("click", function() {
//         clickCount++; // Incrementa o contador de cliques
//         if (clickCount >= 10) {
//             // Troca o áudio após 10 cliques
//             audio.src = alternateAudio;
//         }
//         if (audio.readyState >= 2) {
//             audio.currentTime = 0;
//             audio.play();
//         } else {
//             audio.addEventListener("canplay", function() {
//                 audio.play();
//             });
//         }
//     });

//     image.addEventListener("mouseout", function() {
//         audio.pause();
//         audio.currentTime = 0;
//     });
// });