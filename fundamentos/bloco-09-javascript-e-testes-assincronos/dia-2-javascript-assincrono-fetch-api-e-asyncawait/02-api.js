const API_URL = 'https://api.coincap.io/v2/assets/?limit=10';

const fetchCrypto = async () => {

  const response = await fetch(API_URL);
  const responseJson = await response.json();
  const data = await responseJson.data;

  const arrNomesCrypto = converterEmArrDeNomes(data);

  const percorrerArrNomesCrypto = (nomeDaCripto) =>  adicionarCryptoAoHtml(nomeDaCripto)

  arrNomesCrypto.forEach(percorrerArrNomesCrypto);
  
}

function converterEmArrDeNomes(arrObj) {

  const converter = (objCrypto) => objCrypto.name

  const arrNomes = arrObj.map(converter);

  return arrNomes;
}

function adicionarCryptoAoHtml(nomeDaCripto) {
  const ul = document.querySelector('ul');

  const li = document.createElement('li');

  li.innerHTML = nomeDaCripto;

  ul.appendChild(li);
}

window.onload = () => fetchCrypto();


