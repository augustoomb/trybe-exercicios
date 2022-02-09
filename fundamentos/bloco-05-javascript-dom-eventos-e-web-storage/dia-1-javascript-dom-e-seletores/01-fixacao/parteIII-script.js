//COR VERDE NO FUNDO DO HEADER
let header = document.getElementById("header-container");
header.style.backgroundColor ="green";

//COR SALMÃO COLUNA DA ESQUERDA
let colunaEsquerda = document.querySelector(".emergency-tasks");
colunaEsquerda.style.backgroundColor = "salmon";

//COR AMARELA COLUNA DA DIREITA
let colunaDireita = document.querySelector(".no-emergency-tasks");
colunaDireita.style.backgroundColor = "yellow"

//COR LILÁS FUNDO DOS TEXTOS DA COLUNA ESQUERDA
let titulosColunaEsquerda = document.querySelectorAll(".emergency-tasks div h3")//devolve um array
for(let i=0; i<titulosColunaEsquerda.length; i+=1){
    titulosColunaEsquerda[i].style.backgroundColor = "purple"
}

//COR PRETA FUNDO DOS TEXTOS DA COLUNA DIREITA
let titulosColunaDireita = document.querySelectorAll(".no-emergency-tasks div h3") //devolve um array
for(let i=0; i<titulosColunaDireita.length; i+=1){
    titulosColunaDireita[i].style.backgroundColor = "black"
}