//Crie um irmão para elementoOndeVoceEsta 
let pai = document.getElementById("pai");

let irmaoDeElementoOndeVoceEsta = document.createElement("section");
irmaoDeElementoOndeVoceEsta.id = "irmaoDeElementoOndeVoceEsta" //apenas para confer.
irmaoDeElementoOndeVoceEsta.innerText = "irmaoDeElementoOndeVoceEsta" //apenas para confer.

pai.appendChild(irmaoDeElementoOndeVoceEsta);

//Crie um filho para elementoOndeVoceEsta
let h3FilhoDeElementoOndeVoceEsta = document.createElement("h3");
h3FilhoDeElementoOndeVoceEsta.id = "h3FilhoDeElementoOndeVoceEsta"
h3FilhoDeElementoOndeVoceEsta.innerText = "h3FilhoDeElementoOndeVoceEsta";

let elementoOndeVoceEsta = document.getElementById("elementoOndeVoceEsta");
elementoOndeVoceEsta.appendChild(h3FilhoDeElementoOndeVoceEsta)


//Crie um filho para primeiroFilhoDoFilho 
let h4FilhoDoPrimeiroFilhoDoFilho = document.createElement("h4");
h4FilhoDoPrimeiroFilhoDoFilho.id = "h4FilhoDoPrimeiroFilhoDoFilho";//apenas..

let primeiroFilhoDoFilho = document.getElementById("primeiroFilhoDoFilho");
primeiroFilhoDoFilho.appendChild(h4FilhoDoPrimeiroFilhoDoFilho)


//A partir desse filho criado, acesse terceiroFilho
h4FilhoDoPrimeiroFilhoDoFilho.parentElement.parentElement.nextElementSibling

/********/

//PARTE 3 - REMOVENDO ELEMENTOS

/*Remova todos os elementos filhos de paiDoPai exceto pai , 
elementoOndeVoceEsta e primeiroFilhoDoFilho .*/



//

