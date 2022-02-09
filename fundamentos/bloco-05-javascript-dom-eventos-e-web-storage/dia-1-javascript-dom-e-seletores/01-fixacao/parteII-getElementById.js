const paragraph = document.getElementById("paragraph");
paragraph.style.color = "red";

/*Recupere o elemento que contém o título da página e faça algo com ele, 
    como alterá-lo para o nome do seu filme favorito.*/

const titulo = document.getElementById("page-title")
titulo.innerText = "A Origem"

/* Agora recupere o segundo parágrafo e use sua criatividade para alterá-lo. */

const segParagrafo = document.getElementById("second-paragraph")
segParagrafo.innerText = "Sinopse do filme A Origem"
segParagrafo.style.color = "blue"
segParagrafo.style.fontSize = "15px"

/* Por fim, recupere o subtítulo e altere-o também. */

const subtitulo = document.getElementById("subtitle")
subtitulo.innerText = "Um subtitulo para o filme A Origem"