// Seleciona todos os elementos com a classe "carrosseul" e armazena em uma variável
const carrosseuls = document.getElementsByClassName("carrosseul");

// Variável para armazenar o índice atual do carrossel
let carrosseulIndex = 0;

// Chama a função showCarrosseuls com o índice atual
showCarrosseuls(carrosseulIndex);

// Função para mostrar ou esconder os elementos do carrossel
function showCarrosseuls(n) {
    // Variável para iterar sobre os elementos do carrossel
    let i;

    // Se o índice for maior que o número de elementos do carrossel, resetar para 0
    if (n > carrosseuls.length - 1) {
        carrosseulIndex = 0;
    }
    // Se o índice for menor que 0, resetar para o último elemento do carrossel
    if (n < 0) {
        carrosseulIndex = carrosseuls.length - 1;
    }

    // Esconder todos os elementos do carrossel
    for (i = 0; i < carrosseuls.length; i++) {
        carrosseuls[i].style.display = "none";
    }

    // Mostrar o elemento no índice atual
    carrosseuls[carrosseulIndex].style.display = "flex";
}

// Função para incrementar o índice do carrossel
function plusCarrosseul(n) {
    // Chama a função showCarrosseuls com o novo índice
    showCarrosseuls(carrosseulIndex += n);
}

// Cria um intervalo para atualizar o carrossel automaticamente a cada 4 segundos
const carrosseulInterval = setInterval(function () {
    // Chama a função plusCarrosseul para incrementar o índice do carrossel
    plusCarrosseul(1);
}, 4000); // Mude 4000 para o intervalo desejado em milissegundos (4 segundos no exemplo)