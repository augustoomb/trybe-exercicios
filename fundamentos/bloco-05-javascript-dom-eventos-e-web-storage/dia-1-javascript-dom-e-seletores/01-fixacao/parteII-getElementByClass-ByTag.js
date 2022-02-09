/* 
Utilizando o mesmo template de exercício anterior:
Adicione uma classe igual para os dois parágrafos. */

//R: adicionado no arquivo html


/* Recupere os seus parágrafos via código JavaScript , usando a função getElementsByClassName*/
/*Altere algum estilo do primeiro deles. */

document.getElementsByClassName("paragrafo")[0].innerText = "manipulando parágrafo 1"

document.getElementsByClassName("paragrafo")[1].style.color = "blue"

/* Recupere o subtítulo e altere a cor dele usando a função getElementsByTagName . */

document.getElementsByTagName("h4")[0].style.color = "red"