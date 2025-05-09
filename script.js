const botao = document.getElementById('galeria');
const divContent = document.getElementById('carros');
const imagens = document.querySelectorAll('.imgcarros');
const carrossel = document.querySelector('.carros-container')
let currentIndex = 0 // Índice da imagem atual
divContent.style.display = "none";
imagens.forEach((img, index) => {
    if (index !== currentIndex) img.style.display = 'none'; // Oculta todas as imagens, exceto a primeira
});
botao.addEventListener("click", function() {
    divContent.classList.toggle('ativo');
    if (divContent.style.display === "none") {
        divContent.style.display = "grid";
    } else {
            divContent.style.display = "none";
        }
    });
document.getElementById ('proximo').addEventListener ('click', () => {
    imagens[currentIndex].style.display = 'none'; //Oculta a imagem atual
    currentIndex = (currentIndex + 1) % imagens.length; // Atualiza o índice da imagem atual
    imagens[currentIndex].style.display = 'block'; // Exibe a próxima imagem
    atualizarCarrossel();
});
document.getElementById ('anterior').addEventListener ('click', () => {
    imagens[currentIndex].style.display = 'none'; //Oculta a imagem atual
    currentIndex = (currentIndex - 1 + imagens.length) % imagens.length; // Atualiza o índice da imagem atual
    imagens[currentIndex].style.display = 'block'; // Exibe a próxima imagem
    atualizarCarrossel();
});
function atualizarCarrossel () {
    const deslocamento = -currentIndex * 100; // Para mover para o próximo item
    carrossel.style.display = `translateX(${deslocamento}%)`;
}