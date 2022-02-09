/*
Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
- document.getElementById()
- document.getElementsByClassName()
- document.getElementsByTagName()
*/

//Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos.
let minhaDescricao = document.getElementsByTagName("p")
minhaDescricao[1].innerText = "Quero ser um desenvolvedor full stack em uma grande empresa."

//Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
let corDoQuadradoExterno = document.getElementsByClassName("main-content");
corDoQuadradoExterno[0].style.backgroundColor = "rgb(76,164,109)";

//Crie uma função que mude a cor do quadrado vermelho para branco.
let corDoQuadradoInterno = document.getElementsByClassName("center-content");
corDoQuadradoInterno[0].style.backgroundColor = "white";

//Crie uma função que corrija o texto da tag <h1>.
let textoH1 = document.getElementsByClassName("title");
textoH1[0].innerText = "Exercício 5.1 - JavaScript";

//Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
let tagsP = document.getElementsByTagName("p");
for(let i=0; i<tagsP.length; i+=1){
    tagsP[i].innerText = tagsP[i].innerText.toUpperCase()
}

//Crie uma função que exiba o conteúdo de todas as tags <p> no console.
mostrarConteudoDasTagsP();

function mostrarConteudoDasTagsP(){
    let tagsP = document.getElementsByTagName("p");
    for(let i=0; i<tagsP.length; i+=1){
        console.log(tagsP[i].innerText);
    }
}