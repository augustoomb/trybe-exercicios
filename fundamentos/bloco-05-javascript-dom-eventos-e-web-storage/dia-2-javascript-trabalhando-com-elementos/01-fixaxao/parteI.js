//Acesse o elemento elementoOndeVoceEsta .
let elementoOndeVoceEsta = document.getElementById("elementoOndeVoceEsta");

//Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
elementoOndeVoceEsta.parentElement.style.backgroundColor = "blue";

//Acesse o primeiroFilhoDoFilho e adicione um texto a ele.
document.getElementById("primeiroFilhoDoFilho").innerText = "primeiroFilhoDoFilho";

//Acesse o primeiroFilho a partir de pai.
document.getElementById("pai").firstElementChild;

//Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta.
elementoOndeVoceEsta.previousElementSibling;

//Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta.
elementoOndeVoceEsta.nextSibling;

//Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta
elementoOndeVoceEsta.nextElementSibling;

//Agora acesse o terceiroFilho a partir de pai
let todosOsFilhosDePai = document.getElementById("pai").children; //retorna array de filhos de pai
todosOsFilhosDePai[2];