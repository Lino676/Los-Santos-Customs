const botao = document.getElementById('galeria');
const divContent = document.getElementById('carros');
divContent.style.display = "none";
botao.addEventListener("click", function() {
    if (divContent.style.display === "none") {
        divContent.style.display = "grid"; 
    } else {
            divContent.style.display = "none";
        }
    });